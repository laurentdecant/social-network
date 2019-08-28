import User from "./User";

export default interface Post {
  _id: string;
  timestamp: string;
  message: string;
  author: User;
}
