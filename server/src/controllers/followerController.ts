import { Response, NextFunction } from "express";
import AuthorizedRequest from "../types/AuthorizedRequest";
import userModel from "../models/userModel";
import { handle } from "./utils";

const findMany = handle(
  async (req: AuthorizedRequest, res: Response, next: NextFunction) => {
    if (!req.query.ids) {
      return;
    }

    const user = await userModel.findById(req.user.id);
    if (!user) {
      return;
    }

    return req.query.ids
      .split(",")
      .map((id: string) => (user.following as string[]).includes(id));
  }
);

const create = handle(
  ({ body, user }: AuthorizedRequest, res: Response, next: NextFunction) =>
    userModel.update(
      {
        $and: [{ _id: { $eq: user.id } }, { following: { $ne: body.userId } }]
      },
      { $push: { following: body.userId } }
    )
);

const _delete = handle(
  ({ params, user }: AuthorizedRequest, res: Response, next: NextFunction) =>
    userModel.update(
      {
        $and: [{ _id: { $eq: user.id } }, { following: params.id }]
      },
      { $pull: { following: params.id } },
      { new: true }
    )
);

export default {
  findMany,
  create,
  delete: _delete
};
