import { Schema, model } from "mongoose";
import * as modelNames from "./modelNames";
import Post from "../types/Post";

const postSchema = new Schema(
  {
    message: {
      type: String,
      required: true
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: modelNames.User,
      required: true
    }
  },
  { versionKey: false }
);

const postModel = model<Post>(modelNames.Post, postSchema);

export default postModel;
