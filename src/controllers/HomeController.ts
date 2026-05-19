import type { Request, Response } from "express";

import { getSeoMetadata } from "../config/seo.js";

class HomeController {
  public static index(_request: Request, response: Response): void {
    response.render("home/index", {
      seo: getSeoMetadata("home")
    });
  }
}

export default HomeController;
