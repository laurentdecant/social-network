import { postJson } from "../fetch";
import * as actions from "../actions/auth";
import { createEpic } from "./utils";

const signupEpic = createEpic(
  actions.signup,
  actions.signupSuccess,
  actions.signupFailure,
  payload => postJson("auth/signup", payload)
);

const loginEpic = createEpic(
  actions.login,
  actions.loginSuccess,
  actions.loginFailure,
  payload => postJson("auth/login", payload)
);

export { signupEpic, loginEpic };
