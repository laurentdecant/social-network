import { Router } from "express";
import * as userController from "../controllers/userController";

const router = Router();

router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

router
  .route("/:id")
  .get(userController.findOne)
  .put(userController.update)
  .delete(userController.delete);

export default router;
