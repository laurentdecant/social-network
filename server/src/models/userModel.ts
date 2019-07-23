import { Document, Schema, model } from "mongoose";
import bcrypt from "bcrypt";

interface User extends Document {
  username: string;
  password: string;
  comparePassword(password: string): Promise<boolean>;
}

var userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.pre<User>("save", function(next) {
  bcrypt.hash(this.password, 8, (err, encrypted) => {
    if (err) {
      next(err);
    }

    this.password = encrypted;
    next();
  });
});

userSchema.methods.comparePassword = function(password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, (err, same) => {
      if (err) {
        return reject(err);
      }

      resolve(same);
    });
  });
};

export default model<User>("users", userSchema);
