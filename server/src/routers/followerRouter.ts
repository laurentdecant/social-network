import { Router } from "express";
import followerController from "../controllers/followerController";

const router = Router();

router.get("", followerController.findMany);

export default router;
