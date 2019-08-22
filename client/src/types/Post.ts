import User from "./User";

export default interface Post {
  _id: string;
  message: string;
  author: User;
}
