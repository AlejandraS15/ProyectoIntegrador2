import type { ChatbotIntent, ChatbotKnowledge } from "../data/chatbotKnowledge.js";
import type { ChatbotReply } from "./chatbotEngine.js";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

interface GeminiCandidatePart {
  text?: string;
}

interface GeminiResponse {
  candidates?: Array<{
    content?: {
      parts?: GeminiCandidatePart[];
    };
  }>;
}

interface ChatbotHistoryItem {
  role: "assistant" | "user";
  text: string;
}

const defaultGeminiModel = "gemini-2.5-flash";
let localEnvCache: Record<string, string> | undefined;

function getLocalEnv(): Record<string, string> {
  if (localEnvCache) {
    return localEnvCache;
  }

  localEnvCache = {};
  const envPath = join(process.cwd(), ".env");

  if (!existsSync(envPath)) {
    return localEnvCache;
  }

  const lines = readFileSync(envPath, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "");

    if (key) {
      localEnvCache[key] = value;
    }
  }

  return localEnvCache;
}

function getEnvValue(key: string): string | undefined {
  return process.env[key] || getLocalEnv()[key];
}

function compactKnowledge(knowledge: ChatbotKnowledge): string {
  const treatments = knowledge.services.treatments.map((treatment) => ({
    benefits: treatment.benefits,
    duration: treatment.duration,
    faqs: treatment.faqs,
    process: treatment.process,
    summary: treatment.summary,
    title: treatment.title
  }));

  return JSON.stringify({
    booking: knowledge.booking,
    brand: knowledge.brand,
    contact: knowledge.contact,
    pricing: knowledge.pricing,
    schedule: knowledge.schedule,
    services: {
      additional: knowledge.services.additional,
      treatments
    },
    staff: knowledge.staff,
    tourism: knowledge.tourism
  });
}

function sanitizeHistory(history: unknown): ChatbotHistoryItem[] {
  if (!Array.isArray(history)) {
    return [];
  }

  return history
    .slice(-6)
    .flatMap((item) => {
      if (!item || typeof item !== "object") {
        return [];
      }

      const record = item as Record<string, unknown>;
      const role = record.role === "assistant" ? "assistant" : record.role === "user" ? "user" : undefined;
      const text = typeof record.text === "string" ? record.text.trim().slice(0, 700) : "";

      return role && text ? [{ role, text }] : [];
    });
}

function extractGeminiText(data: GeminiResponse): string {
  return data.candidates?.[0]?.content?.parts
    ?.map((part) => part.text ?? "")
    .join("")
    .trim() ?? "";
}

const chatbotIntents: ChatbotIntent[] = [
  "greeting",
  "services",
  "freeEvaluation",
  "location",
  "schedule",
  "booking",
  "procedures",
  "foreignPatients",
  "pricing",
  "staff",
  "unrelated",
  "fallback"
];

function normalizeIntentValue(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z]/g, "");
}

function toChatbotIntent(value: string): ChatbotIntent | undefined {
  const normalized = normalizeIntentValue(value);
  return chatbotIntents.find((intent) => normalizeIntentValue(intent) === normalized);
}

function buildIntentPrompt(
  message: string,
  knowledge: ChatbotKnowledge,
  localIntent: ChatbotIntent,
  history: ChatbotHistoryItem[]
): string {
  const isEnglish = knowledge.language === "en";
  const historyText = history.length > 0
    ? history.map((item) => `${item.role}: ${item.text}`).join("\n")
    : isEnglish ? "No previous conversation." : "Sin conversacion previa.";
  const treatments = knowledge.services.treatments.map((treatment) => treatment.title).join(", ");
  const staffNames = knowledge.staff.members.map((member) => member.name).join(", ");

  return [
    isEnglish
      ? "You classify user messages for a dental clinic chatbot."
      : "Clasificas mensajes para un chatbot de una clinica odontologica.",
    "Return only one of these intents:",
    chatbotIntents.join(", "),
    "",
    `Local intent guess: ${localIntent}`,
    `Known treatments: ${treatments || "none"}`,
    `Known staff: ${staffNames || "none"}`,
    `Recent conversation:\n${historyText}`,
    `User message: ${message}`,
    "",
    "Return only the intent string."
  ].join("\n");
}

export async function interpretGeminiChatbotIntent(options: {
  history?: unknown;
  knowledge: ChatbotKnowledge;
  localIntent: ChatbotIntent;
  message: string;
}): Promise<ChatbotIntent | undefined> {
  const apiKey = getEnvValue("GEMINI_API_KEY");

  if (!apiKey) {
    return undefined;
  }

  const model = getEnvValue("GEMINI_MODEL") || defaultGeminiModel;
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
  const history = sanitizeHistory(options.history);
  const prompt = buildIntentPrompt(options.message, options.knowledge, options.localIntent, history);

  try {
    const response = await fetch(endpoint, {
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
            role: "user"
          }
        ],
        generationConfig: {
          maxOutputTokens: 24,
          temperature: 0,
          topP: 0.1
        }
      }),
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey
      },
      method: "POST"
    });

    if (!response.ok) {
      console.error("Gemini intent request failed", {
        status: response.status,
        statusText: response.statusText
      });
      return undefined;
    }

    const data = await response.json() as GeminiResponse;
    const text = extractGeminiText(data);
    return text ? toChatbotIntent(text) : undefined;
  } catch (error) {
    console.error("Gemini intent request error", error);
    return undefined;
  }
}

function buildPrompt(message: string, knowledge: ChatbotKnowledge, localReply: ChatbotReply, history: ChatbotHistoryItem[]): string {
  const isEnglish = knowledge.language === "en";
  const historyText = history.length > 0
    ? history.map((item) => `${item.role}: ${item.text}`).join("\n")
    : isEnglish ? "No previous conversation." : "Sin conversación previa.";

  return [
    isEnglish
      ? "You are the virtual assistant for Dental Expertos, an aesthetic dental clinic in Guayabal, Medellin."
      : "Eres el asistente virtual de Dental Expertos, una clínica odontológica estética en Guayabal, Medellín.",
    "Rules:",
    "- Answer only about this clinic, its services, procedures, location, hours, prices when available, booking and dental orientation based on the provided knowledge.",
    "- You may answer questions about the clinic doctors/team only using the staff data in the knowledge.",
    "- When the user asks about a treatment, use the treatment summary, process, benefits, duration, expected results and FAQs from the knowledge.",
    "- Do not invent facts, prices, packages, doctors, guarantees, diagnoses or medical claims not present in the knowledge.",
    "- If information is missing, say the clinic team can confirm it directly.",
    "- Keep the tone friendly, professional, reassuring and naturally sales-oriented.",
    "- Mention that the initial assessment is free when it fits naturally.",
    "- Guide users toward WhatsApp/contact when they show interest in booking, prices or a case review.",
    "- Keep the answer concise: 2 to 5 short sentences.",
    "- Write in the same language as the user/page.",
    "- Do not add markdown tables or lists unless necessary.",
    "",
    `Detected intent: ${localReply.intent}`,
    `Local safe answer to preserve: ${localReply.text}`,
    `Clinic knowledge JSON: ${compactKnowledge(knowledge)}`,
    `Recent conversation:\n${historyText}`,
    `User message: ${message}`,
    "",
    "Return only the final assistant answer text."
  ].join("\n");
}

export async function generateGeminiChatbotReply(options: {
  history?: unknown;
  knowledge: ChatbotKnowledge;
  localReply: ChatbotReply;
  message: string;
}): Promise<ChatbotReply> {
  const apiKey = getEnvValue("GEMINI_API_KEY");

  if (!apiKey || options.localReply.intent === "unrelated") {
    return options.localReply;
  }

  const model = getEnvValue("GEMINI_MODEL") || defaultGeminiModel;
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
  const history = sanitizeHistory(options.history);
  const prompt = buildPrompt(options.message, options.knowledge, options.localReply, history);

  try {
    const response = await fetch(endpoint, {
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
            role: "user"
          }
        ],
        generationConfig: {
          maxOutputTokens: 260,
          temperature: 0.35,
          topP: 0.9
        }
      }),
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey
      },
      method: "POST"
    });

    if (!response.ok) {
      console.error("Gemini chatbot request failed", {
        status: response.status,
        statusText: response.statusText
      });
      return options.localReply;
    }

    const data = await response.json() as GeminiResponse;
    const text = extractGeminiText(data);

    if (!text) {
      return options.localReply;
    }

    return {
      ...options.localReply,
      source: "gemini",
      text: text.slice(0, 1200)
    };
  } catch (error) {
    console.error("Gemini chatbot request error", error);
    return options.localReply;
  }
}
