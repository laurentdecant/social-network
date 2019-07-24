import { Schema, model } from "mongoose";
import * as modelNames from "./modelNames";
import Post from "../types/Post";

const postSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: modelNames.Post,
    required: true
  }
});

const postModel = model<Post>(modelNames.Post, postSchema);

export default postModel;
