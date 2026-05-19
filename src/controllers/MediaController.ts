import type { Request, Response } from "express";

import { getSeoMetadata } from "../config/seo.js";

class MediaController {
  public static beforeAfter(_request: Request, response: Response): void {
    response.render("media/before-after", {
      seo: getSeoMetadata("beforeAfter")
    });
  }

  public static facilities(_request: Request, response: Response): void {
    response.render("media/facilities", {
      seo: getSeoMetadata("facilities")
    });
  }
}

export default MediaController;
