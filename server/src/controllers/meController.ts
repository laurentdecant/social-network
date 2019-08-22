import { Response, NextFunction } from "express";
import AuthorizedRequest from "../types/AuthorizedRequest";
import User from "../models/userModel";

async function findOne(
  req: AuthorizedRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const user = await User.findById(req.user.id);
    res.send(user);
  } catch (err) {
    next(err);
  }
}

export default { findOne };
