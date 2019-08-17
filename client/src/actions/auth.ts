import { createAction } from "./utils";

const SIGNUP_REQUEST = "SIGNUP_REQUEST";
const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
const SIGNUP_FAILURE = "SIGNUP_FAILURE";
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

const signup = createAction(
  SIGNUP_REQUEST,
  (username: string, password: string) => ({ username, password })
);
const signupSuccess = createAction(SIGNUP_SUCCESS, (token: string) => ({
  token
}));
const signupFailure = createAction(SIGNUP_FAILURE, (error: Error) => error);

const login = createAction(
  LOGIN_REQUEST,
  (username: string, password: string) => ({ username, password })
);
const loginSuccess = createAction(LOGIN_SUCCESS, (token: string) => ({
  token
}));
const loginFailure = createAction(LOGIN_FAILURE, (error: Error) => error);

export {
  signup,
  signupSuccess,
  signupFailure,
  login,
  loginSuccess,
  loginFailure
};
