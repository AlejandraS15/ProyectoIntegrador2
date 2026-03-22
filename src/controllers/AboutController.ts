import type { Request, Response } from "express";

import { getSeoMetadata } from "../config/seo.js";

class AboutController {
  public static index(_request: Request, response: Response): void {
    response.render("about/index", {
      seo: getSeoMetadata("about")
    });
  }
}

export default AboutController;
