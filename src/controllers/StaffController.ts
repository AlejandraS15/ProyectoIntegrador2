import type { Request, Response } from "express";

import { getSeoMetadata } from "../config/seo.js";

class StaffController {
  public static index(_request: Request, response: Response): void {
    response.render("staff/index", {
      seo: getSeoMetadata("staff")
    });
  }
}

export default StaffController;
