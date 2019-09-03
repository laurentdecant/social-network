import { Request, Response, NextFunction } from "express";
import AuthorizedRequest from "../types/AuthorizedRequest";
import postModel from "../models/postModel";
import { handle } from "./utils";

const path = "author";

const findAll = handle((req: Request, res: Response, next: NextFunction) =>
  postModel
    .find()
    .sort("-_id")
    .populate(path)
);

const findOne = handle((req: Request, res: Response, next: NextFunction) =>
  postModel.findById(req.params.id).populate(path)
);

const create = handle(
  async (req: AuthorizedRequest, res: Response, next: NextFunction) => {
    const post = await postModel.create({
      ...req.body,
      author: req.user.id
    });
    await post.populate(path).execPopulate();
    return post;
  }
);

const update = handle((req: Request, res: Response, next: NextFunction) => {
  const { author, ...body } = req.body;
  return postModel
    .findByIdAndUpdate(
      req.params.id,
      {
        ...body
      },
      { new: true }
    )
    .populate(path);
});

const _delete = handle((req: Request, res: Response, next: NextFunction) =>
  postModel.findByIdAndDelete(req.params.id).populate(path)
);

export default { findAll, findOne, create, update, delete: _delete };
