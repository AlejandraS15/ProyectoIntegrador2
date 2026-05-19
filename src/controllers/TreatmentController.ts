import type { Request, Response } from "express";

import { getSeoMetadata } from "../config/seo.js";

class TreatmentController {
  public static index(_request: Request, response: Response): void {
    response.render("treatments/index", {
      seo: getSeoMetadata("treatments")
    });
  }
}

export default TreatmentController;
