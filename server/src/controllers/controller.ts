import { Request, Response, NextFunction, RequestHandler } from "express";
import { Model, Document } from "mongoose";
import { ObjectId } from "mongodb";

const addTimestamp = (doc: Document) => {
  return {
    ...doc.toObject(),
    timestamp: new ObjectId(doc.id).getTimestamp()
  };
};

const handle = (handler: RequestHandler): RequestHandler => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = await handler(req, res, next);
    let mapped;
    if (Array.isArray(body)) {
      mapped = body.map(addTimestamp);
    } else {
      mapped = addTimestamp(body);
    }
    res.send(mapped);
  } catch (err) {
    next(err);
  }
};

const findAll = (model: Model<any>, path: string) => () => {
  return model.find().populate(path);
};

const findOne = (model: Model<any>, path: string) => (req: Request) => {
  return model.findById(req.params.id).populate(path);
};

const create = (model: Model<any>, path: string) => async (req: Request) => {
  const doc = await model.create({
    ...req.body
  });
  await doc.populate(path).execPopulate();
  return doc;
};

const update = (model: Model<any>, path: string) => (req: Request) => {
  return model
    .findByIdAndUpdate(
      req.params.id,
      {
        ...req.body
      },
      { new: true }
    )
    .populate(path);
};

const _delete = (model: Model<any>, path: string) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return await model.findByIdAndDelete(req.params.id).populate(path);
};

export default (model: Model<any>, path: string) => ({
  findAll: handle(findAll(model, path)),
  findOne: handle(findOne(model, path)),
  create: handle(create(model, path)),
  update: handle(update(model, path)),
  delete: handle(_delete(model, path))
});
