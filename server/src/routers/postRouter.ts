import Router from "express";
import postController from "../controllers/postController";

const router = Router();

router
  .route("/")
  .get(postController.findAll)
  .post(postController.create);

router
  .route("/:id")
  .get(postController.findOne)
  .put(postController.update)
  .delete(postController.delete);

export default router;
