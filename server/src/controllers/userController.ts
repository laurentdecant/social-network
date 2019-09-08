import { Request, Response, NextFunction } from "express";
import AuthorizedRequest from "../types/AuthorizedRequest";
import userModel from "../models/userModel";
import { handle } from "./utils";

const findAll = handle(
  (req: AuthorizedRequest, res: Response, next: NextFunction) =>
    userModel.find({ _id: { $ne: req.user.id } }).sort("username")
);

const findOne = handle((req: Request, res: Response, next: NextFunction) =>
  userModel.findById(req.params.id)
);

const create = handle(
  async (req: AuthorizedRequest, res: Response, next: NextFunction) =>
    userModel.create({
      ...req.body
    })
);

const update = handle((req: Request, res: Response, next: NextFunction) =>
  userModel.findByIdAndUpdate(
    req.params.id,
    {
      ...req.body
    },
    { new: true }
  )
);

const _delete = handle(
  async (req: Request, res: Response, next: NextFunction) => {
    await userModel.deleteOne({ _id: req.params.id });
  }
);

const findMyself = handle(
  (req: AuthorizedRequest, res: Response, next: NextFunction) =>
    userModel.findById(req.user.id)
);

export default {
  findAll,
  findOne,
  create,
  update,
  delete: _delete,
  findMyself
};
