import { Response, NextFunction } from "express";
import AuthorizedRequest from "../types/AuthorizedRequest";
import userModel from "../models/userModel";
import { handle } from "./utils";

const findMany = handle(
  async ({ query }: AuthorizedRequest, res: Response, next: NextFunction) => {
    const ids = query.ids.split(",");
    const users = await userModel.find({ _id: { $in: ids } });
    return ids.map((id: string) => !!users.find(user => user.id === id));
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
