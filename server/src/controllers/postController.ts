import { Response, NextFunction } from "express";
import AuthorizedRequest from "../types/AuthorizedRequest";
import Post from "../models/postModel";

async function findAll(
  req: AuthorizedRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const posts = await Post.find().populate("author");
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
    const post = await Post.findById(req.params.id).populate("author");
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
      author: req.user.id
    });
    await post.populate("author").execPopulate();
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
        author: req.user.id
      },
      { new: true }
    ).populate("author");
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
    const post = await Post.findByIdAndDelete(req.params.id).populate("author");
    res.send(post);
  } catch (err) {
    next(err);
  }
}

export default { findAll, findOne, create, update, delete: _delete };
