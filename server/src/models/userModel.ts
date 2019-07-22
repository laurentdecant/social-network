import { Schema, model } from "mongoose";

var userSchema = new Schema({
  firstName: String,
  lastName: String
});
var User = model("users", userSchema);

export default User;
