import { Document } from "mongoose";

interface Post extends Document {
  message: string;
  userId: any;
}

export default Post;
