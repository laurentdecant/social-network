require("dotenv").config();

import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/userModel";
import AuthorizedRequest from "../types/AuthorizedRequest";

const secretKey = process.env.SECRET_KEY as string;

interface Payload {
  userId: string;
}

function createToken(payload: Payload): Promise<string> {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secretKey, (err: Error, token: string) => {
      if (err) {
        reject(err);
      }

      resolve(token);
    });
  });
}

function verifyToken(token: string): Promise<Payload> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (err: Error, decoded: Payload) => {
      if (err) {
        reject(err);
      }

      resolve(decoded);
    });
  });
}

async function authorize(
  req: AuthorizedRequest,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer")) {
    return res.status(401).send();
  }

  const token = authorization.split("Bearer ")[1];
  if (!token) {
    return res.status(401).send();
  }

  const decoded = await verifyToken(token);
  const user = await User.findById(decoded.userId);
  if (!user) {
    return res.status(401).send();
  }

  req.user = user;
  next();
}

export { createToken, authorize };
