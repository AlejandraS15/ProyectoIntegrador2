import type { Request, Response } from "express";
import { getSeoMetadata } from "../config/seo.js";

class ResultsController {
  public static index(_request: Request, response: Response): void {
    const baseCase = {
      after: "/assets/after1.png",
      afterLabel: "Despues",
      before: "/assets/before1.png",
      beforeLabel: "Antes",
      description: "Mejora estetica y funcional con un enfoque conservador y resultados naturales.",
      image: "",
      title: "Diseno de Sonrisa"
    };

    const cases = [
      {
        ...baseCase,
        description: "Correccion funcional y estetica tras un plan de rehabilitacion oral integral.",
        title: "Rehabilitacion Integral"
      },
      {
        ...baseCase,
        title: "Carillas en Resina"
      },
      {
        ...baseCase,
        title: "Blanqueamiento Dental"
      },
      {
        ...baseCase,
        title: "Armonizacion de Sonrisa"
      },
      {
        ...baseCase,
        title: "Estetica Frontal"
      },
      {
        ...baseCase,
        title: "Rehabilitacion Parcial"
      },
      {
        ...baseCase,
        title: "Correccion de Forma"
      },
      {
        ...baseCase,
        title: "Resinas Estratificadas"
      }
    ];

    response.render("results/index", {
      cases,
      seo: getSeoMetadata("results"),
    });
  }
}

export default ResultsController;
