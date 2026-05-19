import type { Request, Response } from "express";

import { getSeoMetadata } from "../config/seo.js";

class ContactController {
  public static index(_request: Request, response: Response): void {
    response.render("contact/index", {
      seo: getSeoMetadata("contact")
    });
  }
}

export default ContactController;
