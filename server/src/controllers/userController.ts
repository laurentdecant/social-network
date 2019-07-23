import { Request, Response } from "express";
import User from "../models/userModel";

async function findAll(req: Request, res: Response) {
  const users = await User.find();
  res.send(users);
}

async function findOne(req: Request, res: Response) {
  const { id } = req.params;
  const user = await User.findOne({ _id: id });
  res.send(user);
}

async function create(req: Request, res: Response) {
  const user = await User.create(req.body);
  res.send(user);
}

async function update(req: Request, res: Response) {
  const { id } = req.params;
  const user = await User.findOneAndUpdate({ _id: id }, req.body, {
    new: true
  });
  res.send(user);
}

async function _delete(req: Request, res: Response) {
  const { id } = req.params;
  const user = await User.findOneAndDelete({ _id: id });
  res.send(user);
}

export { findAll, findOne, create, update, _delete as delete };
