import type { ResultCase } from "../types/results.js";

const baseCase: Omit<ResultCase, "description" | "title"> = {
  after: "",
  afterLabel: "Despues",
  before: "",
  beforeLabel: "Antes",
  image: ""
};

export const resultCases: ResultCase[] = [
  {
    ...baseCase,
    after: "/assets/results/case-1-after.jpg",
    before: "/assets/results/case-1-before.jpg",
    description: "Diseño completo de sonrisa con análisis de proporción y armonía facial. Resultado natural y radiante.",
    title: "Diseno de Sonrisa"
  },
  {
    ...baseCase,
    after: "/assets/results/case-2-after.jpg",
    before: "/assets/results/case-2-before.jpg",
    description: "Transformación estética integral combinando técnicas de rehabilitación para una sonrisa perfecta.",
    title: "Sonrisa Integral"
  },
  {
    ...baseCase,
    after: "/assets/results/case-3-after.jpg",
    before: "/assets/results/case-3-before.jpg",
    description: "Restauración con carillas estéticas de alta calidad. Cambio de color, forma y proporciones.",
    title: "Carillas en Resina"
  },
  {
    ...baseCase,
    after: "/assets/results/case-4-after.jpg",
    before: "/assets/results/case-4-before.jpg",
    description: "Blanqueamiento profesional de máxima potencia. Sonrisa más joven y radiante en una sesión.",
    title: "Blanqueamiento Dental"
  }
];
