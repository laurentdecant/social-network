import { Router } from "express";
import meController from "../controllers/meController";

const router = Router();

router.get("", meController.findOne);

export default router;
