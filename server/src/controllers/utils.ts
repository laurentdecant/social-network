import { RequestHandler, Request, Response, NextFunction } from "express";
import { Document } from "mongoose";
import { ObjectId } from "mongodb";

const map = (param: Document | Document[]): any => {
  if (Array.isArray(param)) {
    return param.map(map);
  }
  const object = param.toObject();
  return _map(object);
};

const _map = (object: any): any => {
  if (Array.isArray(object)) {
    return object.map(_map);
  } else if (typeof object === "object") {
    return Object.entries(object).reduce((prev: any, [key, value]) => {
      if (key === "_id") {
        prev.id = value;
        prev.timestamp = new ObjectId(value as string).getTimestamp();
      } else {
        prev[key] = value;
      }
      return prev;
    }, {});
  }
  return object;
};

export const handle = (handler: RequestHandler): RequestHandler => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = await handler(req, res, next);
    const mapped = body ? map(body) : null;
    res.send(mapped);
  } catch (err) {
    next(err);
  }
};
