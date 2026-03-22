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
    description:
      "Conoce nuestra clinica odontologica, enfoque humano y compromiso con una atencion dental de calidad en tu ciudad.",
    title: "Nosotros | Clinica Odontologica"
  },
  beforeAfter: {
    description:
      "Revisa casos de antes y despues para conocer resultados reales de nuestros tratamientos odontologicos.",
    title: "Antes y Despues | Resultados Odontologicos"
  },
  contact: {
    description:
      "Encuentra direccion, telefono y canales de contacto para resolver dudas y visitarnos facilmente.",
    title: "Contacto | Clinica Odontologica"
  },
  facilities: {
    description:
      "Conoce nuestras instalaciones odontologicas, equipamiento y espacios preparados para tu comodidad.",
    title: "Instalaciones | Clinica Dental"
  },
  home: {
    description:
      "Clinica odontologica enfocada en salud bucal, estetica dental y prevencion para toda la familia.",
    title: "Inicio | Clinica Odontologica"
  },
  staff: {
    description:
      "Conoce al equipo de odontologas y profesionales que te acompanan en cada etapa de tu tratamiento.",
    title: "Equipo Odontologico"
  },
  treatments: {
    description:
      "Explora tratamientos odontologicos: limpieza, restauracion, estetica y rehabilitacion segun tu necesidad.",
    title: "Tratamientos Dentales"
  }
};

export function getSeoMetadata(key: SeoKey): SeoMetadata {
  return seoDictionary[key];
}
