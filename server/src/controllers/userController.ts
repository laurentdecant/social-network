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

const _delete = handle((req: Request, res: Response, next: NextFunction) =>
  userModel.findByIdAndDelete(req.params.id)
);

const findMyself = handle(
  (req: AuthorizedRequest, res: Response, next: NextFunction) =>
    userModel.findById(req.user.id)
);

const pushFollower = handle(
  (req: AuthorizedRequest, res: Response, next: NextFunction) =>
    userModel.findOneAndUpdate(
      {
        $and: [
          { _id: { $eq: req.user.id } },
          { following: { $ne: req.body.userId } }
        ]
      },
      { $push: { following: req.body.userId } },
      { new: true }
    )
);

export default {
  findAll,
  findOne,
  create,
  update,
  delete: _delete,
  findMyself,
  pushFollower
};
