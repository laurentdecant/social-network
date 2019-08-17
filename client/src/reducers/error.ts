import { createReducer } from "./utils";
import { Action } from "../actions/types";
import { signupFailure, loginFailure } from "../actions/auth";
import { getPostsFailure } from "../actions/post";

interface State {}

const initialState: State = {};

const log = (state: State, { payload }: Action) => {
  alert(payload);
  return state;
};

const reducer = createReducer(initialState)
  .addHandler(signupFailure, log)
  .addHandler(loginFailure, log)
  .addHandler(getPostsFailure, log);

export { reducer as default, State };
