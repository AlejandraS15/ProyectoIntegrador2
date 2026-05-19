import type { Request, Response } from "express";

import type { Language } from "../config/i18n.js";
import { getSeoMetadata } from "../config/seo.js";
import ResultsService from "../services/resultsService.js";

class ResultsController {
  public static index(_request: Request, response: Response): void {
    const language = response.locals.language as Language;
    const { cases } = ResultsService.getPageData(language);

    response.render("results/index", {
      cases,
      seo: getSeoMetadata("results", language)
    });
  }
}

export default ResultsController;
