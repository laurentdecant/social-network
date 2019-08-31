import { combineReducers } from "redux";
import * as auth from "./auth";
import * as me from "./me";
import * as post from "./post";
import * as user from "./user";
import * as error from "./error";

export interface State {
  auth: auth.State;
  me: me.State;
  post: post.State;
  user: user.State;
  error: error.State;
}

export default combineReducers<State>({
  auth: auth.default,
  me: me.default,
  post: post.default,
  user: user.default,
  error: error.default
});
