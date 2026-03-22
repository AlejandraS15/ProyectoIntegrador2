import { Router } from "express";

import AboutController from "../controllers/AboutController.js";
import ContactController from "../controllers/ContactController.js";
import HomeController from "../controllers/HomeController.js";
import MediaController from "../controllers/MediaController.js";
import StaffController from "../controllers/StaffController.js";
import TreatmentController from "../controllers/TreatmentController.js";

const router = Router();

router.get("/", HomeController.index);
router.get("/antes-y-despues", MediaController.beforeAfter);
router.get("/contacto", ContactController.index);
router.get("/equipo", StaffController.index);
router.get("/instalaciones", MediaController.facilities);
router.get("/nosotros", AboutController.index);
router.get("/tratamientos", TreatmentController.index);

export default router;
