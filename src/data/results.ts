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
    description: "Mejora estetica y funcional con un enfoque conservador y resultados naturales.",
    title: "Diseno de Sonrisa"
  },
  {
    ...baseCase,
    after: "/assets/results/case-2-after.jpg",
    before: "/assets/results/case-2-before.jpg",
    description: "Correccion funcional y estetica tras un plan de rehabilitacion oral integral.",
    title: "Rehabilitacion Integral"
  },
  {
    ...baseCase,
    after: "/assets/results/case-3-after.jpg",
    before: "/assets/results/case-3-before.jpg",
    description: "Mejora estetica y funcional con un enfoque conservador y resultados naturales.",
    title: "Carillas en Resina"
  },
  {
    ...baseCase,
    after: "/assets/results/case-4-after.jpg",
    before: "/assets/results/case-4-before.jpg",
    description: "Mejora estetica y funcional con un enfoque conservador y resultados naturales.",
    title: "Blanqueamiento Dental"
  }
];
