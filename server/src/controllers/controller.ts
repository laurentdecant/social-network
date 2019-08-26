import { Request, Response, NextFunction } from "express";
import { Model } from "mongoose";

const findMany = (model: Model<any>) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const docs = await model.find();
    res.send(docs);
  } catch (err) {
    next(err);
  }
};

const findOne = (model: Model<any>) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const docs = await model.findById(req.params.id);
    res.send(docs);
  } catch (err) {
    next(err);
  }
};

const create = (model: Model<any>) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const doc = await model.create({
      ...req.body
    });
    res.send(doc);
  } catch (err) {
    next(err);
  }
};

const update = (model: Model<any>) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const doc = await model.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body
      },
      { new: true }
    );
    res.send(doc);
  } catch (err) {
    next(err);
  }
};

const _delete = (model: Model<any>) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const doc = await model.findByIdAndDelete(req.params.id);
    res.send(doc);
  } catch (err) {
    next(err);
  }
};

export default (model: Model<any>) => ({
  findMany,
  findOne,
  create,
  update,
  delete: _delete
});
