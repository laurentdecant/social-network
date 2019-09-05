import { Router } from "express";
import followerController from "../controllers/followerController";

const router = Router();

router
  .route("")
  .get(followerController.findMany)
  .post(followerController.create);

router.route("/:id").delete(followerController.delete);

export default router;
