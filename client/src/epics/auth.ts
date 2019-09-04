import { createEpic } from "./utils";
import { postJson } from "../fetch";
import * as authActions from "../actions/auth";
import * as meActions from "../actions/me";

const signupEpic = createEpic(
  authActions.signup,
  authActions.signupSuccess,
  authActions.signupFailure,
  payload => postJson("/auth/signup", payload),
  meActions.getMyself
);

const loginEpic = createEpic(
  authActions.login,
  authActions.loginSuccess,
  authActions.loginFailure,
  payload => postJson("/auth/login", payload),
  meActions.getMyself
);

export { signupEpic, loginEpic };
