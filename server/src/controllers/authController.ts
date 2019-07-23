import { Request, Response } from "express";
import User from "../models/userModel";
import { createToken } from "../utils/token";

async function signUp(req: Request, res: Response) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400);
  }

  const user = await User.create(req.body);
  const token = createToken(user._id);
  res.send(token);
}

async function logIn(req: Request, res: Response) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400);
  }

  const user = await User.findOne({ username });
  if (!user) {
    res.status(400).send();
  }

  const same = await user.comparePassword(password);
  if (!same) {
    return res.status(400).send();
  }

  const token = createToken(user._id);
  res.send(token);
}

export default { signUp, logIn };
