import { Request, Response, NextFunction } from "express";
import AuthorizedRequest from "../types/AuthorizedRequest";
import postModel from "../models/postModel";
import { handle } from "./utils";

const findAll = handle(
  ({ user }: AuthorizedRequest, res: Response, next: NextFunction) => {
    return postModel
      .find({ $or: [{ author: user.id }, { author: { $in: user.following } }] })
      .sort("-_id")
      .populate("author");
  }
);

const findOne = handle((req: Request, res: Response, next: NextFunction) =>
  postModel.findById(req.params.id).populate("author")
);

const create = handle(
  async (req: AuthorizedRequest, res: Response, next: NextFunction) => {
    const post = await postModel.create({
      ...req.body,
      author: req.user.id
    });
    await post.populate("author").execPopulate();
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
    .populate("author");
});

const _delete = handle(
  async (
    { params, user }: AuthorizedRequest,
    res: Response,
    next: NextFunction
  ) => {
    const post = await postModel.findById(params.id);
    if (post && post.author !== user.id) {
      res.status(401).send();
    } else {
      await postModel.deleteOne({ _id: params.id });
    }
  }
);

export default { findAll, findOne, create, update, delete: _delete };
