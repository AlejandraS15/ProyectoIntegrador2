import type { SeoMetadata } from "../types/index.js";

type SeoKey =
  | "about"
  | "beforeAfter"
  | "contact"
  | "facilities"
  | "home"
  | "results"
  | "staff"
  | "treatments";

const seoDictionary: Record<SeoKey, SeoMetadata> = {
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
};

export function getSeoMetadata(key: SeoKey): SeoMetadata {
  return seoDictionary[key];
}
