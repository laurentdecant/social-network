import { RequestHandler, Request, Response, NextFunction } from "express";
import { ObjectId } from "mongodb";

const map = (value: any): any => {
  if (Array.isArray(value)) {
    return value.map(map);
  } else if (value._id) {
    const object = value.toObject();
    return _map(object);
  }
  return value;
};

const _map = (value: any): any => {
  if (Array.isArray(value)) {
    return value.map(_map);
  } else if (typeof value === "object") {
    return Object.entries(value).reduce((prev: any, [key, value]) => {
      if (key === "_id") {
        prev.id = value;
        prev.timestamp = new ObjectId(value as string).getTimestamp();
      } else {
        prev[key] = value;
      }
      return prev;
    }, {});
  }
  return value;
};

export const handle = (handler: RequestHandler): RequestHandler => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = await handler(req, res, next);
    const mapped = map(body);
    res.send(mapped);
  } catch (err) {
    next(err);
  }
};
