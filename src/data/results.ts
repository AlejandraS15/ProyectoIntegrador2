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

type ResultCopy = Pick<
  ResultCase,
  | "afterLabel"
  | "beforeLabel"
  | "category"
  | "description"
  | "duration"
  | "objective"
  | "result"
  | "title"
  | "treatment"
>;

const localizedCopy: Record<Language, ResultCopy[]> = {
  en: [
    {
      afterLabel: "After",
      beforeLabel: "Before",
      category: "Smile design",
      description: "Selected case with a natural aesthetic approach, improving color, shape and dental proportion.",
      duration: "2 to 3 appointments",
      objective: "Improve harmony, shade and dental shape",
      result: "A more uniform, balanced and natural smile",
      title: "Natural Smile Design",
      treatment: "Smile Design"
    },
    {
      afterLabel: "After",
      beforeLabel: "Before",
      category: "Aesthetic design",
      description: "Aesthetic smile design planned to refine shape, shade and the visible smile line.",
      duration: "2 to 4 appointments",
      objective: "Refine shape and visible proportions",
      result: "A more defined smile with a polished finish",
      title: "Aesthetic smile design",
      treatment: "Smile Design"
    },
    {
      afterLabel: "After",
      beforeLabel: "Before",
      category: "Smile design",
      description: "Smile design focused on a brighter tone, natural proportions and a clean aesthetic finish.",
      duration: "1 to 3 sessions",
      objective: "Balance color and smile harmony",
      result: "A lighter, fresher and more radiant smile",
      title: "Luminous smile design",
      treatment: "Smile Design"
    },
    {
      afterLabel: "After",
      beforeLabel: "Before",
      category: "Aesthetic design",
      description: "Aesthetic case focused on improving visual order, smile balance and natural symmetry.",
      duration: "According to diagnosis",
      objective: "Improve alignment and dental symmetry",
      result: "A more ordered and harmonious smile",
      title: "Smile harmonization",
      treatment: "Aesthetic Design"
    }
  ],
  es: [
    {
      afterLabel: "Después",
      beforeLabel: "Antes",
      category: "Diseño de sonrisa",
      description: "Caso seleccionado con enfoque estético natural, mejorando color, forma y proporción dental.",
      duration: "2 a 3 citas",
      objective: "Mejorar armonía, color y forma dental",
      result: "Sonrisa más uniforme, equilibrada y natural",
      title: "Diseño de sonrisa natural",
      treatment: "Diseño de sonrisa"
    },
    {
      afterLabel: "Después",
      beforeLabel: "Antes",
      category: "Diseño estético",
      description: "Diseño estético de sonrisa planeado para refinar forma, color y línea visible de sonrisa.",
      duration: "2 a 4 citas",
      objective: "Refinar forma y proporciones visibles",
      result: "Sonrisa más definida con acabado pulido",
      title: "Diseño estético de sonrisa",
      treatment: "Diseño de sonrisa"
    },
    {
      afterLabel: "Después",
      beforeLabel: "Antes",
      category: "Diseño de sonrisa",
      description: "Diseño de sonrisa enfocado en un tono más luminoso, proporciones naturales y acabado limpio.",
      duration: "1 a 3 sesiones",
      objective: "Equilibrar color y armonía de sonrisa",
      result: "Sonrisa más luminosa, fresca y radiante",
      title: "Diseño de sonrisa luminoso",
      treatment: "Diseño de sonrisa"
    },
    {
      afterLabel: "Después",
      beforeLabel: "Antes",
      category: "Diseño estético",
      description: "Caso estético enfocado en mejorar orden visual, balance de sonrisa y simetría natural.",
      duration: "Según diagnóstico",
      objective: "Mejorar alineación y simetría dental",
      result: "Sonrisa más ordenada y armónica",
      title: "Armonización de sonrisa",
      treatment: "Diseño estético"
    }
  ]
};

export function getResultCases(language: Language = "es"): ResultCase[] {
  return sharedCases.map((sharedCase, index) => ({
    ...sharedCase,
    ...localizedCopy[language][index]
  }));
}
