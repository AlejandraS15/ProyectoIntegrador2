import { Router } from "express";

import AboutController from "../controllers/AboutController.js";
import ContactController from "../controllers/ContactController.js";
import HomeController from "../controllers/HomeController.js";
import ResultsController from "../controllers/ResultsController.js";
import StaffController from "../controllers/StaffController.js";
import TreatmentController from "../controllers/TreatmentController.js";

const router = Router();
const localizedRouter = Router();

function registerRoutes(target: Router): void {
  target.get("/", HomeController.index);
  target.get("/contacto", ContactController.index);
  target.get("/equipo", StaffController.index);
  target.get("/nosotros", AboutController.index);
  target.get("/tratamientos", TreatmentController.index);
  target.get("/tratamientos/:slug", TreatmentController.show);
  target.get("/resultados", ResultsController.index);
}

registerRoutes(router);
registerRoutes(localizedRouter);
router.use("/en", localizedRouter);

export default router;
