import type { SeoMetadata } from "../types/index.js";
import type { Language } from "./i18n.js";

type SeoKey =
  | "about"
  | "beforeAfter"
  | "contact"
  | "facilities"
  | "home"
  | "results"
  | "staff"
  | "treatments";

const seoDictionary: Record<Language, Record<SeoKey, SeoMetadata>> = {
  en: {
    about: {
      description:
        "Meet Dental Expertos, an aesthetic dental clinic in Guayabal, Medellin focused on natural smiles and close, human care.",
      keywords: "aesthetic dental clinic guayabal, cosmetic dentistry medellin, dental expertos medellin",
      title: "Aesthetic Dental Clinic in Guayabal"
    },
    beforeAfter: {
      description:
        "Real before and after cases in smile design, veneers and cosmetic dentistry in Medellin.",
      keywords: "before and after smile design medellin, cosmetic dentistry results, dental cases medellin",
      title: "Before and After | Smile Design Medellin"
    },
    contact: {
      description:
        "Book your aesthetic dental assessment in Guayabal, Medellin. Address, WhatsApp, phone and opening hours for Dental Expertos.",
      keywords: "dentist guayabal medellin, dental clinic guayabal, smile design consultation medellin",
      title: "Contact | Dental Clinic in Guayabal Medellin"
    },
    facilities: {
      description:
        "Discover our dental facilities in Guayabal, Medellin: comfortable spaces, biosafety and aesthetic dental care.",
      keywords: "dental clinic facilities medellin, dental clinic guayabal, dental office medellin",
      title: "Facilities | Dental Clinic in Guayabal"
    },
    home: {
      description:
        "Aesthetic dental clinic in Guayabal, Medellin. Smile design, dental veneers, whitening, aesthetic orthodontics and implants.",
      keywords: "smile design medellin, aesthetic dental clinic guayabal, dental veneers medellin, dental whitening medellin",
      title: "Smile Design in Medellin"
    },
    results: {
      description: "See real smile design, veneer and dental whitening results from Dental Expertos Medellin.",
      imageUrl: "/assets/after1.png",
      keywords: "smile design results medellin, dental veneers medellin, dental whitening medellin",
      title: "Results | Cosmetic Dentistry Medellin"
    },
    staff: {
      description:
        "Meet our team of dentists in Medellin, specialists in cosmetic dentistry, smile design and orthodontics.",
      keywords: "cosmetic dentists medellin, smile design specialists medellin, dental team guayabal",
      title: "Aesthetic Dental Team in Medellin"
    },
    treatments: {
      description:
        "Aesthetic dental treatments in Medellin: smile design, veneers, whitening, aesthetic orthodontics and implants.",
      keywords: "dental treatments medellin, smile design medellin, dental veneers medellin, aesthetic implants medellin",
      title: "Aesthetic Dental Treatments in Medellin"
    }
  },
  es: {
    about: {
      description:
        "Conoce Dental Expertos, clínica odontológica estética en Guayabal, Medellín, enfocada en sonrisas naturales y atención cercana.",
      keywords: "clinica odontologica estetica guayabal, odontologia estetica medellin, dental expertos medellin",
      title: "Clínica Odontológica Estética en Guayabal"
    },
    beforeAfter: {
      description:
        "Casos reales de antes y después en diseño de sonrisa, carillas y estética dental en Medellín.",
      keywords: "antes y despues diseño de sonrisa medellin, resultados odontologia estetica, casos dentales medellin",
      title: "Antes y Después | Diseño de Sonrisa Medellín"
    },
    contact: {
      description:
        "Agenda tu valoración odontológica estética en Guayabal, Medellín. Dirección, WhatsApp, teléfono y horarios de Dental Expertos.",
      keywords: "odontologo guayabal medellin, clinica dental guayabal, valoracion diseño de sonrisa medellin",
      title: "Contacto | Clínica Dental en Guayabal Medellín"
    },
    facilities: {
      description:
        "Conoce nuestras instalaciones odontológicas en Guayabal, Medellín: espacios cómodos, bioseguridad y atención estética dental.",
      keywords: "instalaciones clinica dental medellin, clinica odontologica guayabal, consultorio odontologico medellin",
      title: "Instalaciones | Clínica Odontológica en Guayabal"
    },
    home: {
      description:
        "Clínica odontológica estética en Guayabal, Medellín. Diseño de sonrisa, carillas dentales, blanqueamiento, ortodoncia estética e implantes.",
      keywords: "diseño de sonrisa medellin, clinica odontologica estetica guayabal, carillas dentales medellin, blanqueamiento dental medellin",
      title: "Diseño de Sonrisa en Medellín"
    },
    results: {
      description: "Mira resultados reales de diseño de sonrisa, carillas y blanqueamiento dental en Dental Expertos Medellín.",
      imageUrl: "/assets/after1.png",
      keywords: "resultados diseño de sonrisa medellin, carillas dentales medellin, blanqueamiento dental medellin",
      title: "Resultados | Estética Dental Medellín"
    },
    staff: {
      description:
        "Conoce nuestro equipo de odontólogas en Medellín, especialistas en estética dental, diseño de sonrisa y ortodoncia.",
      keywords: "odontologas esteticas medellin, especialistas diseño de sonrisa medellin, equipo odontologico guayabal",
      title: "Equipo Odontológico Estético en Medellín"
    },
    treatments: {
      description:
        "Tratamientos de estética dental en Medellín: diseño de sonrisa, carillas, blanqueamiento, ortodoncia estética e implantes.",
      keywords: "tratamientos dentales medellin, diseño de sonrisa medellin, carillas dentales medellin, implantes esteticos medellin",
      title: "Tratamientos de Estética Dental en Medellín"
    }
  }
};

export function getSeoMetadata(key: SeoKey, language: Language = "es"): SeoMetadata {
  return seoDictionary[language][key];
}
