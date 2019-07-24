import { Document } from "mongoose";

interface User extends Document {
  username: string;
  password: string;
  comparePassword(password: string): Promise<boolean>;
}

export default User;
