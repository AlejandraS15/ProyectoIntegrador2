import type { SeoMetadata } from "../types/index.js";
import type { Language } from "./i18n.js";

type SeoKey =
  | "about"
  | "contact"
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
    contact: {
      description:
        "Book your aesthetic dental assessment in Guayabal, Medellin. Address, WhatsApp, phone and opening hours for Dental Expertos.",
      keywords: "dentist guayabal medellin, dental clinic guayabal, smile design consultation medellin",
      title: "Contact | Dental Clinic in Guayabal Medellin"
    },
    home: {
      description:
        "Aesthetic dental clinic in Guayabal, Medellin specializing in smile design, veneers, whitening, aesthetic orthodontics and implants. Book your assessment with Dental Expertos.",
      imageUrl: "/img/clinic/Home.png",
      keywords: "aesthetic dental clinic medellin, smile design medellin, dental veneers medellin, dental whitening medellin, implants medellin",
      title: "Smile Design in Medellin | Aesthetic Dental Clinic"
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
        "Smile design options in Medellin: composite resin micro design, resin smile design and ceramic smile design at Dental Expertos.",
      keywords: "smile design medellin, composite resin smile design, ceramic smile design medellin, dental micro design medellin",
      title: "Smile Design Treatments in Medellin"
    }
  },
  es: {
    about: {
      description:
        "Conoce Dental Expertos, clínica odontológica estética en Guayabal, Medellín, enfocada en sonrisas naturales y atención cercana.",
      keywords: "clinica odontologica estetica guayabal, odontologia estetica medellin, dental expertos medellin",
      title: "Clínica Odontológica Estética en Guayabal"
    },
    contact: {
      description:
        "Agenda tu valoración odontológica estética en Guayabal, Medellín. Dirección, WhatsApp, teléfono y horarios de Dental Expertos.",
      keywords: "odontologo guayabal medellin, clinica dental guayabal, valoracion diseño de sonrisa medellin",
      title: "Contacto | Clínica Dental en Guayabal Medellín"
    },
    home: {
      description:
        "Clínica odontológica estética en Guayabal, Medellín especializada en diseño de sonrisa, carillas, blanqueamiento, ortodoncia estética e implantes. Agenda tu valoración en Dental Expertos.",
      imageUrl: "/img/clinic/Home.png",
      keywords: "clinica odontologica estetica medellin, diseño de sonrisa medellin, carillas dentales medellin, blanqueamiento dental medellin, implantes medellin",
      title: "Diseño de Sonrisa en Medellín | Clínica Odontológica"
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
        "Opciones de diseño de sonrisa en Medellín: microdiseño en resina, diseño en resina y diseño en cerámica en Dental Expertos.",
      keywords: "diseño de sonrisa medellin, diseño en resina medellin, diseño en ceramica medellin, microdiseño dental medellin",
      title: "Diseños de Sonrisa en Medellín"
    }
  }
};

export function getSeoMetadata(key: SeoKey, language: Language = "es"): SeoMetadata {
  return seoDictionary[language][key];
}
