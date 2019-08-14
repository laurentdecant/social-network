import { postJson } from "../fetch";
import * as actions from "../actions/auth";
import { createEpic } from "./utils";

const signupEpic = createEpic(
  actions.signup,
  actions.signupSuccess,
  actions.signupFailure,
  action => postJson("/auth/signup", action.payload)
);

const loginEpic = createEpic(
  actions.login,
  actions.loginSuccess,
  actions.loginFailure,
  action => postJson("/auth/login", action.payload)
);

export { signupEpic, loginEpic };
