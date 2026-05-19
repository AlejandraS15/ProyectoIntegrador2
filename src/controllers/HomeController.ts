import type { Request, Response } from "express";

import type { Language } from "../config/i18n.js";
import { getSeoMetadata } from "../config/seo.js";

class HomeController {
  public static index(_request: Request, response: Response): void {
    const language = response.locals.language as Language;

    response.render("home/index", {
      seo: getSeoMetadata("home", language)
    });
  }
}

export default HomeController;
