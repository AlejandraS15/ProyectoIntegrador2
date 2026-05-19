import type { Request, Response } from "express";

import type { Language } from "../config/i18n.js";
import { getSeoMetadata } from "../config/seo.js";

class MediaController {
  public static beforeAfter(_request: Request, response: Response): void {
    const language = response.locals.language as Language;

    response.render("media/before-after", {
      seo: getSeoMetadata("beforeAfter", language)
    });
  }

  public static facilities(_request: Request, response: Response): void {
    const language = response.locals.language as Language;

    response.render("media/facilities", {
      seo: getSeoMetadata("facilities", language)
    });
  }
}

export default MediaController;
