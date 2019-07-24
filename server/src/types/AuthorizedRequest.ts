import { Request } from "express";
import User from "./User";

interface AuthorizedRequest extends Request {
  user: User;
}

export default AuthorizedRequest;
