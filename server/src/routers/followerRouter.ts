import { Router } from "express";
import userController from "../controllers/userController";

const router = Router();

router.post("", userController.pushFollower);

export default router;
