import { Router } from "express";
import userController from "../controllers/userController";
import followerController from "../controllers/followerController";

const router = Router();

router.get("", userController.findMyself);

router
  .route("/following")
  .get(followerController.findMany)
  .post(followerController.create);

router.delete("/following/:id", followerController.delete);

export default router;
