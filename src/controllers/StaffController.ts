import type { Request, Response } from "express";

import type { Language } from "../config/i18n.js";
import { getSeoMetadata } from "../config/seo.js";

class StaffController {
  public static index(_request: Request, response: Response): void {
    const language = response.locals.language as Language;

    response.render("staff/index", {
      seo: getSeoMetadata("staff", language)
    });
  }
}

export default StaffController;
