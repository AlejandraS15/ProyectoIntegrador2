import type { Request, Response } from "express";
import { getSeoMetadata } from "../config/seo.js";

class ResultsController {
  public static index(_request: Request, response: Response): void {

    const cases = [
      {
        before: "/assets/before1.jpg",
        after: "/assets/after1.jpg",
      }
    ];

    response.render("results/index", {
      //seo: getSeoMetadata("results"),
      cases
    });
  }
}

export default ResultsController;
