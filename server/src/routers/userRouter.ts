import { Router } from "express";
import userController from "../controllers/userController";

const router = Router();

router.route("/").get(userController.findAll);
router.route("/:id").get(userController.findOne);
router.route("/:id/followers").post(userController.pushFollower);

export default router;
