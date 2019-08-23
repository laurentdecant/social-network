import { combineReducers } from "redux";
import * as auth from "./auth";
import * as me from "./me";
import * as post from "./post";
import * as error from "./error";

export interface State {
  auth: auth.State;
  me: me.State;
  post: post.State;
  error: error.State;
}

export default combineReducers<State>({
  auth: auth.default,
  me: me.default,
  post: post.default,
  error: error.default
});
