import { Response, NextFunction } from "express";
import AuthorizedRequest from "../types/AuthorizedRequest";
import Post from "../models/postModel";

async function findAll(
  req: AuthorizedRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (err) {
    next(err);
  }
}

async function findOne(
  req: AuthorizedRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const post = await Post.findById(req.params.id);
    res.send(post);
  } catch (err) {
    next(err);
  }
}

async function create(
  req: AuthorizedRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const post = await Post.create({
      ...req.body,
      userId: req.user.id
    });
    res.send(post);
  } catch (err) {
    next(err);
  }
}

async function update(
  req: AuthorizedRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        userId: req.user.id
      },
      { new: true }
    );
    res.send(post);
  } catch (err) {
    next(err);
  }
}

async function _delete(
  req: AuthorizedRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.send(post);
  } catch (err) {
    next(err);
  }
}

export { findAll, findOne, create, update, _delete as delete };
