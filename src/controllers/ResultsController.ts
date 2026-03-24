import type { Request, Response } from "express";

import { getSeoMetadata } from "../config/seo.js";
import ResultsService from "../services/resultsService.js";

class ResultsController {
  public static index(_request: Request, response: Response): void {
    const { cases } = ResultsService.getPageData();

    response.render("results/index", {
      cases,
      seo: getSeoMetadata("results")
    });
  }
}

export default ResultsController;
