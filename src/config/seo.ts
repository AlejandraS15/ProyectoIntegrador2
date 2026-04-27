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
      "Conoce nuestra clínica odontológica, enfoque humano y compromiso con una atención dental de calidad en tu ciudad.",
    title: "Nosotros | Dental Expertos"
  },
  beforeAfter: {
    description:
      "Revisa casos de antes y después para conocer resultados reales de nuestros tratamientos odontológicos.",
    title: "Antes y Después | Resultados Odontológicos"
  },
  contact: {
    description:
      "Encuentra dirección, teléfono y canales de contacto para resolver dudas y visitarnos fácilmente.",
    title: "Contacto | Dental Expertos"
  },
  facilities: {
    description:
      "Conoce nuestras instalaciones odontológicas, equipamiento y espacios preparados para tu comodidad.",
    title: "Instalaciones | Clínica Dental"
  },
  home: {
    description:
      "Clínica odontológica enfocada en salud bucal, estética dental y prevención para toda la familia.",
    title: "Inicio | Dental Expertos"
  },
  results: {
    description: "Mira los resultados reales de nuestros tratamientos dentales.",
    imageUrl: "/assets/after1.png",
    title: "Resultados | Dental Expertos"
  },
  staff: {
    description:
      "Conoce al equipo de odontólogas y profesionales que te acompañan en cada etapa de tu tratamiento.",
    title: "Equipo Odontológico"
  },
  treatments: {
    description:
      "Explora tratamientos odontológicos: limpieza, restauración, estética y rehabilitación según tu necesidad.",
    title: "Tratamientos Dentales"
  }
};

export function getSeoMetadata(key: SeoKey): SeoMetadata {
  return seoDictionary[key];
}
