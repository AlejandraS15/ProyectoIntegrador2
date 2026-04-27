import type { Request, Response } from "express";

import { getSeoMetadata } from "../config/seo.js";
import { findTreatmentBySlug } from "../data/treatments.js";

class TreatmentController {
  public static index(_request: Request, response: Response): void {
    response.render("treatments/index", {
      seo: getSeoMetadata("treatments")
    });
  }

  public static show(request: Request, response: Response): void {
    const slug = Array.isArray(request.params.slug)
      ? request.params.slug[0]
      : request.params.slug;
    const treatment = findTreatmentBySlug(slug);

    if (!treatment) {
      response.status(404).send("Tratamiento no encontrado");
      return;
    }

    response.render("treatments/detail", {
      seo: {
        description: treatment.seoDescription,
        imageUrl: treatment.heroImage,
        keywords: treatment.seoKeywords,
        title: `${treatment.title} en Medellín`
      },
      treatment
    });
  }
}

export default TreatmentController;
