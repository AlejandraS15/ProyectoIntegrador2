import type { SeoMetadata } from "../types/index.js";

type SeoKey =
  | "about"
  | "beforeAfter"
  | "contact"
  | "facilities"
  | "home"
  | "staff"
  | "treatments";

const seoDictionary: Record<SeoKey, SeoMetadata> = {
  about: {
    description: "Conoce nuestra filosofia de atencion odontologica y compromiso con tu sonrisa.",
    title: "Nosotros"
  },
  beforeAfter: {
    description: "Casos clinicos y resultados antes y despues de nuestros tratamientos.",
    title: "Antes y Despues"
  },
  contact: {
    description: "Encuentra nuestra direccion, canales de contacto y horarios de atencion.",
    title: "Contacto"
  },
  facilities: {
    description: "Recorre nuestras instalaciones disenadas para tu comodidad y seguridad.",
    title: "Instalaciones"
  },
  home: {
    description: "Clinica odontologica enfocada en salud bucal, confianza y bienestar.",
    title: "Inicio"
  },
  staff: {
    description: "Conoce al equipo de odontologas que cuidara de tu salud oral.",
    title: "Equipo"
  },
  treatments: {
    description: "Explora los tratamientos odontologicos disponibles para cada necesidad.",
    title: "Tratamientos"
  }
};

export function getSeoMetadata(key: SeoKey): SeoMetadata {
  return seoDictionary[key];
}
