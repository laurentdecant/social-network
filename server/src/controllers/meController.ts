import { Response, NextFunction } from "express";
import AuthorizedRequest from "../types/AuthorizedRequest";
import userController from "../controllers/userController";

async function findOne(
  req: AuthorizedRequest,
  res: Response,
  next: NextFunction
) {
  req.params.id = req.user.id;
  return userController.findOne(req, res, next);
}

export default { findOne };
