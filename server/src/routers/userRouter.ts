import { Router } from "express";
import userController from "../controllers/userController";

const router = Router();

router.route("/").get(userController.findAll);

router.route("/:id").get(userController.findOne);

export default router;
