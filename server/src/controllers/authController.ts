import { Request, Response, NextFunction } from "express";
import User from "../models/userModel";
import { createToken } from "../auth";

async function signUp(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send();
  }

  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).send();
    }

    user = await User.create({ username, password });
    const token = await createToken({ userId: user.id });
    res.send({ token });
  } catch (err) {
    next(err);
  }
}

async function logIn(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(401).send();
  }

  try {
    const user = await User.findOne({ username }).select("+password");
    if (!user) {
      return res.status(401).send();
    }

    const same = await user.comparePassword(password);
    if (!same) {
      return res.status(401).send();
    }

    const token = await createToken({ userId: user.id });
    res.send({ token });
  } catch (err) {
    return next(err);
  }
}

export default { signUp, logIn };
