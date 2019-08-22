import { Document } from "mongoose";
import User from "./User";

interface Post extends Document {
  message: string;
  author: User;
}

export default Post;
