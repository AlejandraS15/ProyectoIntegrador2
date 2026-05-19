import type { Request, Response } from "express";

import type { Language } from "../config/i18n.js";
import { getSeoMetadata } from "../config/seo.js";
import { findTreatmentBySlug, getTreatmentDetails } from "../data/treatments.js";

class TreatmentController {
  public static index(_request: Request, response: Response): void {
    const language = response.locals.language as Language;

    response.render("treatments/index", {
      seo: getSeoMetadata("treatments", language),
      treatments: getTreatmentDetails(language)
    });
  }

  public static show(request: Request, response: Response): void {
    const language = response.locals.language as Language;
    const slug = Array.isArray(request.params.slug)
      ? request.params.slug[0]
      : request.params.slug;
    const treatment = findTreatmentBySlug(slug, language);

    if (!treatment) {
      response.status(404).send(language === "en" ? "Treatment not found" : "Tratamiento no encontrado");
      return;
    }

    response.render("treatments/detail", {
      seo: {
        description: treatment.seoDescription,
        imageUrl: treatment.heroImage,
        keywords: treatment.seoKeywords,
        title: language === "en" ? `${treatment.title} in Medellin` : `${treatment.title} en Medellín`
      },
      treatment
    });
  }
}

export default TreatmentController;
