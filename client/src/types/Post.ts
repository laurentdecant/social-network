import User from "./User";

export default interface Post {
  id: string;
  message: string;
  author: User;
  timestamp: string;
}
