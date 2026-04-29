import type { Language } from "../config/i18n.js";
import type { ResultCase } from "../types/results.js";

const sharedCases: Array<Pick<ResultCase, "after" | "before" | "image">> = [
  {
    after: "/assets/results/case-1-after.jpg",
    before: "/assets/results/case-1-before.jpg",
    image: ""
  },
  {
    after: "/assets/results/case-2-after.jpg",
    before: "/assets/results/case-2-before.jpg",
    image: ""
  },
  {
    after: "/assets/results/case-3-after.jpg",
    before: "/assets/results/case-3-before.jpg",
    image: ""
  },
  {
    after: "/assets/results/case-4-after.jpg",
    before: "/assets/results/case-4-before.jpg",
    image: ""
  }
];

const localizedCopy: Record<Language, Array<Pick<ResultCase, "afterLabel" | "beforeLabel" | "description" | "title">>> = {
  en: [
    {
      afterLabel: "After",
      beforeLabel: "Before",
      description: "Complete smile design with proportion and facial harmony analysis. A natural, radiant result.",
      title: "Smile Design"
    },
    {
      afterLabel: "After",
      beforeLabel: "Before",
      description: "Comprehensive aesthetic transformation combining rehabilitation techniques for a balanced smile.",
      title: "Complete Smile"
    },
    {
      afterLabel: "After",
      beforeLabel: "Before",
      description: "Restoration with high-quality aesthetic veneers. Improved color, shape and proportions.",
      title: "Composite Veneers"
    },
    {
      afterLabel: "After",
      beforeLabel: "Before",
      description: "Professional high-impact whitening. A brighter, fresher smile in one session.",
      title: "Dental Whitening"
    }
  ],
  es: [
    {
      afterLabel: "Después",
      beforeLabel: "Antes",
      description: "Diseño completo de sonrisa con análisis de proporción y armonía facial. Resultado natural y radiante.",
      title: "Diseño de Sonrisa"
    },
    {
      afterLabel: "Después",
      beforeLabel: "Antes",
      description: "Transformación estética integral combinando técnicas de rehabilitación para una sonrisa equilibrada.",
      title: "Sonrisa Integral"
    },
    {
      afterLabel: "Después",
      beforeLabel: "Antes",
      description: "Restauración con carillas estéticas de alta calidad. Cambio de color, forma y proporciones.",
      title: "Carillas en Resina"
    },
    {
      afterLabel: "Después",
      beforeLabel: "Antes",
      description: "Blanqueamiento profesional de máxima potencia. Sonrisa más joven y radiante en una sesión.",
      title: "Blanqueamiento Dental"
    }
  ]
};

export function getResultCases(language: Language = "es"): ResultCase[] {
  return sharedCases.map((sharedCase, index) => ({
    ...sharedCase,
    ...localizedCopy[language][index]
  }));
}
