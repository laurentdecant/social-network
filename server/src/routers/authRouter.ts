import { Router } from "express";
import authController from "../controllers/authController";

const router = Router();

router.post("/signup", authController.signUp);
router.post("/login", authController.logIn);

export default router;
