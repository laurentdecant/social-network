import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import User from "../types/User";
import * as modelNames from "./modelNames";

var userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: modelNames.User
      }
    ]
  },
  { versionKey: false }
);

userSchema.pre<User>("save", function(next) {
  bcrypt.hash(this.password, 8, (err, encrypted) => {
    if (err) {
      next(err);
    }

    this.password = encrypted;
    next();
  });
});

userSchema.methods.comparePassword = function(password: string) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, (err, same) => {
      if (err) {
        return reject(err);
      }

      resolve(same);
    });
  });
};

const userModel = model<User>(modelNames.User, userSchema);

export default userModel;
