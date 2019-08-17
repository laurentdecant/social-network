import { combineReducers } from "redux";
import * as auth from "./auth";
import * as error from "./error";
import * as post from "./post";

export interface State {
  auth: auth.State;
  error: error.State;
  post: post.State;
}

export default combineReducers<State>({
  auth: auth.default,
  error: error.default,
  post: post.default
});
