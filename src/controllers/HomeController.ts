import type { Request, Response } from "express";

import type { Language } from "../config/i18n.js";
import { getSeoMetadata } from "../config/seo.js";

class HomeController {
  public static index(_request: Request, response: Response): void {
    const language = response.locals.language as Language;
    const seo = getSeoMetadata("home", language) ?? getSeoMetadata("home", "es");

    try {
      console.log("Rendering home page", { language });
      response.render("home/index", { seo });
    } catch (error) {
      console.error("Error rendering home page:", error);
      response.status(500).send("Error rendering home page");
    }
  }
}

export default HomeController;
