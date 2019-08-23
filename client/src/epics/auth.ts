import { postJson } from "../fetch";
import * as authActions from "../actions/auth";
import * as meActions from "../actions/me";
import { createEpic } from "./utils";

const signupEpic = createEpic(
  authActions.signup,
  authActions.signupSuccess,
  authActions.signupFailure,
  payload => postJson("auth/signup", payload),
  meActions.getMe
);

const loginEpic = createEpic(
  authActions.login,
  authActions.loginSuccess,
  authActions.loginFailure,
  payload => postJson("auth/login", payload),
  meActions.getMe
);

export { signupEpic, loginEpic };
