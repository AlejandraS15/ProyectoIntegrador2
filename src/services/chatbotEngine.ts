import type { ChatbotIntent, ChatbotKnowledge } from "../data/chatbotKnowledge.js";

export interface ChatbotReply {
  cta?: boolean;
  intent: ChatbotIntent;
  showBookingButton?: boolean;
  source: "local" | "gemini";
  text: string;
}

interface ChatbotTreatmentMatch {
  benefits: string[];
  duration: string;
  slug: string;
  summary: string;
  title: string;
}

const intentKeywords = {
  booking: ["agendar", "agenda", "cita", "reservar", "whatsapp", "contactar", "llamar", "book", "appointment", "contact", "call"],
  foreignPatients: ["extranj", "turismo", "tourism", "foreign", "international", "english", "ingles", "viaje", "travel"],
  freeEvaluation: ["gratis", "gratuita", "sin costo", "valoracion", "evaluacion", "consulta", "free", "assessment", "consultation"],
  location: ["ubic", "direccion", "donde", "mapa", "guayabal", "medellin", "poblado", "location", "address", "where", "map"],
  pricing: ["precio", "precios", "costo", "costos", "valor", "cuanto vale", "cuanto cuesta", "price", "pricing", "cost"],
  procedures: ["procedimiento", "proceso", "duracion", "tarda", "resina", "ceramica", "microdiseno", "carilla", "blanqueamiento", "diente", "sonrisa", "procedure", "process", "duration", "resin", "ceramic", "veneer", "whitening", "tooth", "smile"],
  schedule: ["horario", "hora", "abren", "atienden", "sabado", "domingo", "festivo", "schedule", "hours", "open", "saturday", "sunday"],
  staff: ["doctor", "doctora", "doctoras", "doc", "equipo", "especialista", "odontologa", "odontologo", "isabella", "lopez", "yenny", "madrigal", "estudio", "estudios", "formacion", "trayectoria", "experiencia", "perfil", "team", "doctor", "dentist", "training", "career", "profile"],
  services: ["servicio", "servicios", "tratamiento", "tratamientos", "ofrecen", "hacen", "especialidad", "services", "treatments", "offer"]
};

const clinicKeywords = Object.values(intentKeywords).flat().concat([
  "dental",
  "odont",
  "clinica",
  "expertos",
  "implant",
  "orthodontics",
  "clinic",
  "dentist"
]);

export function normalizeChatbotText(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function includesAny(value: string, keywords: string[]): boolean {
  return keywords.some((keyword) => value.includes(keyword));
}

export function classifyChatbotIntent(message: string): ChatbotIntent {
  const text = normalizeChatbotText(message);

  if (/^(hola|buenas|hello|hi|hey)\b/.test(text)) {
    return "greeting";
  }

  if (includesAny(text, intentKeywords.freeEvaluation)) return "freeEvaluation";
  if (includesAny(text, intentKeywords.pricing)) return "pricing";
  if (includesAny(text, intentKeywords.location)) return "location";
  if (includesAny(text, intentKeywords.schedule)) return "schedule";
  if (includesAny(text, intentKeywords.booking)) return "booking";
  if (includesAny(text, intentKeywords.foreignPatients)) return "foreignPatients";
  if (includesAny(text, intentKeywords.staff)) return "staff";
  if (includesAny(text, intentKeywords.procedures)) return "procedures";
  if (includesAny(text, intentKeywords.services)) return "services";

  return includesAny(text, clinicKeywords) ? "fallback" : "unrelated";
}

export function findChatbotTreatment(message: string, knowledge: ChatbotKnowledge): ChatbotTreatmentMatch | undefined {
  const text = normalizeChatbotText(message);

  return knowledge.services.treatments.find((treatment) => {
    const title = normalizeChatbotText(treatment.title);
    const slug = normalizeChatbotText(treatment.slug.replace(/-/g, " "));

    return text.includes(title) || text.includes(slug) || title.split(" ").some((word) => word.length > 5 && text.includes(word));
  });
}

function listTreatments(knowledge: ChatbotKnowledge): string {
  return knowledge.services.treatments.map((treatment) => treatment.title).join(", ");
}

function findStaffMember(message: string, knowledge: ChatbotKnowledge) {
  const text = normalizeChatbotText(message);

  return knowledge.staff.members.find((member) => {
    const name = normalizeChatbotText(member.name);
    const nameParts = name.split(/\s+/).filter((part) => part.length > 3);

    return nameParts.some((part) => text.includes(part));
  });
}

function formatStaffMember(member: ChatbotKnowledge["staff"]["members"][number], isEnglish: boolean): string {
  const training = member.training.length > 0
    ? isEnglish
      ? `Training mentioned on the site: ${member.training.join(", ")}.`
      : `Formacion mencionada en el sitio: ${member.training.join(", ")}.`
    : "";

  return `${member.name}: ${member.specialty}. ${member.focus} ${training}`;
}

function cta(knowledge: ChatbotKnowledge): string {
  return `${knowledge.booking.freeEvaluation} ${knowledge.booking.primaryCta}`;
}

export function buildLocalChatbotReply(message: string, knowledge: ChatbotKnowledge, intentOverride?: ChatbotIntent): ChatbotReply {
  const intent = intentOverride ?? classifyChatbotIntent(message);
  const treatment = findChatbotTreatment(message, knowledge);
  const isEnglish = knowledge.language === "en";

  if (intent === "greeting") {
    return {
      cta: true,
      intent,
      source: "local",
      text: knowledge.copy.welcome
    };
  }

  if (intent === "services") {
    const additional = knowledge.services.additional.length > 0
      ? isEnglish
        ? `The site also mentions: ${knowledge.services.additional.join(", ")}.`
        : `El sitio también menciona: ${knowledge.services.additional.join(", ")}.`
      : "";

    return {
      cta: true,
      intent,
      source: "local",
      text: isEnglish
        ? `At ${knowledge.brand.name} we highlight these smile design options: ${listTreatments(knowledge)}. ${additional}`
        : `En ${knowledge.brand.name} destacamos estas opciones de diseño de sonrisa: ${listTreatments(knowledge)}. ${additional}`
    };
  }

  if (intent === "freeEvaluation") {
    return {
      intent,
      showBookingButton: true,
      source: "local",
      text: isEnglish
        ? `${knowledge.booking.freeEvaluation} During that visit, the team can review your smile, expectations and the best treatment path. ${knowledge.booking.primaryCta}`
        : `${knowledge.booking.freeEvaluation} En esa visita, el equipo puede revisar tu sonrisa, tus expectativas y la mejor ruta de tratamiento. ${knowledge.booking.primaryCta}`
    };
  }

  if (intent === "location") {
    return {
      cta: true,
      intent,
      source: "local",
      text: isEnglish
        ? `We are located at ${knowledge.contact.address} You can also open the map from the contact page.`
        : `Estamos en ${knowledge.contact.address} También puedes abrir el mapa desde la página de contacto.`
    };
  }

  if (intent === "schedule") {
    return {
      cta: true,
      intent,
      source: "local",
      text: `${knowledge.schedule.weekdays} ${knowledge.schedule.saturday} ${knowledge.schedule.closed} ${knowledge.schedule.flexibility}`
    };
  }

  if (intent === "booking") {
    return {
      cta: true,
      intent,
      showBookingButton: true,
      source: "local",
      text: isEnglish
        ? `The fastest way to book or modify your appointment is WhatsApp. You can also contact us by phone at ${knowledge.contact.phoneDisplay} or email ${knowledge.contact.email}.`
        : `La forma más rápida de agendar o modificar tu cita es WhatsApp. También puedes contactarnos por teléfono al ${knowledge.contact.phoneDisplay} o al correo ${knowledge.contact.email}.`
    };
  }

  if (intent === "foreignPatients") {
    return {
      cta: true,
      intent,
      showBookingButton: true,
      source: "local",
      text: knowledge.tourism.note
    };
  }

  if (intent === "pricing") {
    return {
      cta: true,
      intent,
      showBookingButton: true,
      source: "local",
      text: knowledge.pricing.note
    };
  }

  if (intent === "staff") {
    const member = findStaffMember(message, knowledge);
    const staffText = member
      ? formatStaffMember(member, isEnglish)
      : knowledge.staff.members.map((staffMember) => formatStaffMember(staffMember, isEnglish)).join(" ");

    return {
      cta: true,
      intent,
      source: "local",
      text: isEnglish
        ? `${knowledge.staff.note} ${staffText}`
        : `${knowledge.staff.note} ${staffText}`
    };
  }

  if (intent === "procedures") {
    if (treatment) {
      const benefits = treatment.benefits.slice(0, 2).join(" ");
      return {
        cta: true,
        intent,
        source: "local",
        text: `${treatment.title}: ${treatment.summary} ${treatment.duration} ${benefits}`
      };
    }

    return {
      cta: true,
      intent,
      source: "local",
      text: isEnglish
        ? "Every case starts with an assessment. The team reviews shade, edges, proportions, bite and expectations before recommending composite resin, ceramic or another route mentioned on the site."
        : "Cada caso empieza con una valoración. El equipo revisa color, bordes, proporciones, mordida y expectativas antes de recomendar resina, cerámica u otra ruta mencionada en el sitio."
    };
  }

  if (intent === "unrelated") {
    return {
      intent,
      source: "local",
      text: isEnglish
        ? "I can only help with information about our dental clinic, treatments, location and booking. Remember that the initial assessment is free."
        : "Puedo ayudarte únicamente con información de nuestra clínica odontológica, tratamientos, ubicación y agendamiento. Recuerda que la valoración inicial es gratis."
    };
  }

  return {
    intent,
    source: "local",
    text: isEnglish
      ? "The site does not include that specific information. The clinic team can confirm it directly through WhatsApp. Remember that the initial assessment is free."
      : "El sitio no incluye esa información específica. El equipo de la clínica puede confirmarla directamente por WhatsApp. Recuerda que la valoración inicial es gratis."
  };
}

export function appendChatbotCta(reply: ChatbotReply, knowledge: ChatbotKnowledge): ChatbotReply {
  if (!reply.cta) {
    return reply;
  }

  return {
    ...reply,
    text: `${reply.text}\n\n${cta(knowledge)}`
  };
}
