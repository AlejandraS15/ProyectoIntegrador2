import type { Language } from "../config/i18n.js";
import { getTreatmentDetails } from "./treatments.js";

export type ChatbotIntent =
  | "greeting"
  | "services"
  | "freeEvaluation"
  | "location"
  | "schedule"
  | "booking"
  | "procedures"
  | "foreignPatients"
  | "pricing"
  | "staff"
  | "unrelated"
  | "fallback";

interface ChatbotTreatmentSummary {
  benefits: string[];
  duration: string;
  expectedResults: string[];
  faqs: Array<{
    answer: string;
    question: string;
  }>;
  process: Array<{
    description: string;
    title: string;
  }>;
  slug: string;
  summary: string;
  title: string;
}

interface ChatbotStaffMember {
  bio: string;
  focus: string;
  name: string;
  quote: string;
  specialty: string;
  training: string[];
}

export interface ChatbotKnowledge {
  booking: {
    freeEvaluation: string;
    primaryCta: string;
    whatsappText: string;
  };
  brand: {
    name: string;
    tagline: string;
  };
  contact: {
    address: string;
    email: string;
    googleMapsUrl: string;
    phoneDisplay: string;
    whatsappNumber: string;
  };
  copy: {
    bookingButton: string;
    closeLabel: string;
    inputPlaceholder: string;
    openLabel: string;
    quickQuestions: string[];
    sendLabel: string;
    title: string;
    typing: string;
    welcome: string;
  };
  language: Language;
  pricing: {
    note: string;
    priceRange: string;
  };
  schedule: {
    closed: string;
    flexibility: string;
    saturday: string;
    weekdays: string;
  };
  services: {
    additional: string[];
    treatments: ChatbotTreatmentSummary[];
  };
  staff: {
    members: ChatbotStaffMember[];
    note: string;
  };
  tourism: {
    note: string;
  };
}

const googleMapsUrl =
  "https://www.google.com/maps/place/Dental+Expertos,+Cra.+52+%23+7-115,+Guayabal,+Medell%C3%ADn,+Guayabal,+Medell%C3%ADn,+Antioquia/@6.2137364,-75.5827135,16z/data=!4m6!3m5!1s0x8e4429d121384199:0x174c3362860f3874!8m2!3d6.2137364!4d-75.5827135!16s%2Fg%2F11j53bg4nq";

function getTreatmentSummaries(language: Language): ChatbotTreatmentSummary[] {
  return getTreatmentDetails(language).map((treatment) => ({
    benefits: treatment.benefits,
    duration: treatment.duration,
    expectedResults: treatment.expectedResults,
    faqs: treatment.faqs,
    process: treatment.process,
    slug: treatment.slug,
    summary: treatment.summary,
    title: treatment.title
  }));
}

function getStaffMembers(language: Language): ChatbotStaffMember[] {
  const isEnglish = language === "en";

  return isEnglish
    ? [
        {
          bio: "She enjoys constantly updating her personal and professional skills so she can inspire patients. Her focus is creating natural smiles that reflect each person's unique essence.",
          focus: "High-aesthetic smile design and natural smile results.",
          name: "Dr. Isabella Lopez",
          quote: "I am an aesthetic dentist. My energy and dedication are contagious; I am authentic, empathetic and true to my values.",
          specialty: "Aesthetic Dentistry",
          training: [
            "Advanced aesthetics diploma",
            "Layered resin and high-aesthetic dentistry course with Dr. Laura Ochoa",
            "Pardoux training with Dr. Daniela Alcalde",
            "Ceramic veneer layering course"
          ]
        },
        {
          bio: "Her practice has been strengthened by guidance from high-level mentors, allowing her to offer treatments that improve smiles and transform lives.",
          focus: "Orthodontics and the art of composite resin and ceramic smile designs.",
          name: "Dr. Yenny Madrigal",
          quote: "Since graduating in 2009, I have focused my career on orthodontics and the art of composite and ceramic smile design.",
          specialty: "Orthodontics and Aesthetics",
          training: ["Patto Mora", "Martin Prato", "Cristian Quevedo", "Felipe Bezerra", "Daniela Alcalde"]
        }
      ]
    : [
        {
          bio: "Disfruta actualizarse constantemente para mejorar sus habilidades personales y profesionales e inspirar a sus pacientes. Su enfoque se centra en crear sonrisas naturales que reflejen la esencia unica de cada persona.",
          focus: "Disenos de sonrisa de alta estetica y resultados naturales.",
          name: "Dra. Isabella Lopez",
          quote: "Soy odontologa estetica. Mi energia y dedicacion son contagiosas; soy autentica, empatica y fiel a mis valores.",
          specialty: "Odontologia Estetica",
          training: [
            "Diplomado de alta estetica",
            "Curso de resina estratificada y alta estetica con Dra. Laura Ochoa",
            "Formacion en Pardoux con Dra. Daniela Alcalde",
            "Curso de estratificacion en carillas ceramicas"
          ]
        },
        {
          bio: "Odontologa con trayectoria en evolucion constante y especializacion en ortodoncia desde 2016. Su practica ha sido fortalecida por mentores de alto nivel para ofrecer tratamientos que transforman vidas.",
          focus: "Ortodoncia y disenos de sonrisa en resina y ceramica.",
          name: "Dra. Yenny Madrigal",
          quote: "Desde mi graduacion en 2009 he enfocado mi carrera en ortodoncia y en el arte de los disenos de sonrisa en resina y ceramica.",
          specialty: "Ortodoncia y Estetica",
          training: ["Patto Mora", "Martin Prato", "Cristian Quevedo", "Felipe Bezerra", "Daniela Alcalde"]
        }
      ];
}

export function getChatbotKnowledge(language: Language = "es"): ChatbotKnowledge {
  const isEnglish = language === "en";

  return {
    booking: {
      freeEvaluation: isEnglish
        ? "The initial assessment is free."
        : "La valoración inicial es gratis.",
      primaryCta: isEnglish
        ? "Would you like us to help you book your free assessment on WhatsApp?"
        : "¿Quieres que te ayudemos a agendar tu valoración gratis por WhatsApp?",
      whatsappText: isEnglish
        ? "Hello Dental Expertos, I would like to book my free assessment."
        : "Hola Dental Expertos, quiero agendar mi valoración gratis."
    },
    brand: {
      name: "Dental Expertos",
      tagline: isEnglish ? "Dental Clinic" : "Clínica Odontológica"
    },
    contact: {
      address: isEnglish
        ? "Avenida Guayabal, near the end of the 10th Street bridge, Cra. 52 # 07-115, Guayabal, Medellin."
        : "Avenida Guayabal, antes de finalizar el puente de la 10, Cra. 52 # 07-115, Guayabal, Medellín.",
      email: "dentalexpertos@hotmail.com",
      googleMapsUrl,
      phoneDisplay: "+57 3008938020",
      whatsappNumber: "573008938020"
    },
    copy: {
      bookingButton: isEnglish ? "Book on WhatsApp" : "Agendar por WhatsApp",
      closeLabel: isEnglish ? "Close chat" : "Cerrar chat",
      inputPlaceholder: isEnglish ? "Ask about treatments, hours or booking" : "Pregunta por tratamientos, horarios o citas",
      openLabel: isEnglish ? "Open Dental Expertos chat" : "Abrir chat de Dental Expertos",
      quickQuestions: isEnglish
        ? [
            "What services do you offer?",
            "Is the assessment free?",
            "Where are you located?",
            "How can I book an appointment?",
            "Do you help foreign patients?"
          ]
        : [
            "¿Qué servicios ofrecen?",
            "¿La valoración es gratis?",
            "¿Dónde están ubicados?",
            "¿Cómo puedo agendar una cita?",
            "¿Atienden pacientes extranjeros?"
          ],
      sendLabel: isEnglish ? "Send message" : "Enviar mensaje",
      title: isEnglish ? "Virtual assistant" : "Asistente virtual",
      typing: isEnglish ? "Writing..." : "Escribiendo...",
      welcome: isEnglish
        ? "Hi! I am the clinic virtual assistant. I can help with our treatments, location, hours and booking your free assessment."
        : "¡Hola! Soy el asistente virtual de la clínica. Puedo ayudarte con nuestros tratamientos, ubicación, horarios y agendar tu valoración gratis."
    },
    language,
    pricing: {
      note: isEnglish
        ? "The project only lists a general price range ($$). Exact prices depend on the diagnosis, material, number of teeth and treatment phases, so the clinic team can confirm them directly during your free assessment."
        : "El proyecto solo indica un rango general de precios ($$). Los valores exactos dependen del diagnóstico, material, número de dientes y fases del tratamiento, por eso el equipo de la clínica puede confirmarlos directamente en tu valoración gratis.",
      priceRange: "$$"
    },
    schedule: {
      closed: isEnglish ? "Closed on Sundays and holidays." : "Domingos y festivos no hay atención.",
      flexibility: isEnglish ? "The clinic can be flexible in specific cases." : "La clínica puede ser flexible en casos puntuales.",
      saturday: isEnglish ? "Saturdays: 8:00 a.m. - 3:00 p.m." : "Sábados: 8:00 a.m. - 3:00 p.m.",
      weekdays: isEnglish ? "Monday to Friday: 8:00 a.m. - 7:00 p.m." : "Lunes a viernes: 8:00 a.m. - 7:00 p.m."
    },
    services: {
      additional: isEnglish
        ? ["Aesthetic orthodontics", "Aesthetic rehabilitation", "Aesthetic implants", "Dental whitening"]
        : ["Ortodoncia estética", "Rehabilitación estética", "Implantes estéticos", "Blanqueamiento dental"],
      treatments: getTreatmentSummaries(language)
    },
    staff: {
      members: getStaffMembers(language),
      note: isEnglish
        ? "Two doctors lead Dental Expertos with clinical precision, aesthetic sensitivity and warm care from the first consultation."
        : "Dos doctoras lideran Dental Expertos con precision clinica, sensibilidad estetica y un trato humano desde la primera consulta."
    },
    tourism: {
      note: isEnglish
        ? "The site has English content and WhatsApp contact. It does not include dental tourism packages, lodging or travel coordination details, so the clinic team can confirm support for your visit directly."
        : "El sitio cuenta con contenido en inglés y contacto por WhatsApp. No incluye paquetes de turismo dental, hospedaje ni coordinación de viaje, así que el equipo de la clínica puede confirmar directamente cómo acompañarte en tu visita."
    }
  };
}
