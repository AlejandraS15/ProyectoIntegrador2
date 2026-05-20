import type { Request, Response } from "express";

import type { Language } from "../config/i18n.js";
import { supportedLanguages } from "../config/i18n.js";
import { getChatbotKnowledge } from "../data/chatbotKnowledge.js";
import { buildLocalChatbotReply, classifyChatbotIntent } from "../services/chatbotEngine.js";
import { generateGeminiChatbotReply, interpretGeminiChatbotIntent } from "../services/geminiChatbotService.js";

function getRequestLanguage(value: unknown): Language {
  return supportedLanguages.includes(value as Language) ? value as Language : "es";
}

class ChatbotController {
  public static async reply(request: Request, response: Response): Promise<void> {
    const message = typeof request.body?.message === "string" ? request.body.message.trim() : "";

    if (!message) {
      response.status(400).json({
        error: "message_required"
      });
      return;
    }

    const language = getRequestLanguage(request.body?.language);
    const knowledge = getChatbotKnowledge(language);
    const whatsappUrl = `https://wa.me/${knowledge.contact.whatsappNumber}?text=${encodeURIComponent(knowledge.booking.whatsappText)}`;
    const trimmedMessage = message.slice(0, 700);
    const localIntent = classifyChatbotIntent(trimmedMessage);
    const geminiIntent = await interpretGeminiChatbotIntent({
      history: request.body?.history,
      knowledge,
      localIntent,
      message: trimmedMessage
    });
    const resolvedIntent = geminiIntent ?? localIntent;
    const localReply = buildLocalChatbotReply(trimmedMessage, knowledge, resolvedIntent);
    const reply = await generateGeminiChatbotReply({
      history: request.body?.history,
      knowledge,
      localReply,
      message: trimmedMessage
    });

    response.json({
      ...reply,
      booking: {
        buttonLabel: knowledge.copy.bookingButton,
        whatsappUrl
      }
    });
  }
}

export default ChatbotController;
