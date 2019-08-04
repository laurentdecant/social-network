import { createAction } from "./utils";

const SIGNUP_REQUEST = "SIGNUP_REQUEST";
const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
const SIGNUP_FAILURE = "SIGNUP_FAILURE";
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

const signup = createAction<{
  username: string;
  password: string;
}>(SIGNUP_REQUEST);

const signupSuccess = createAction<{
  token: string;
}>(SIGNUP_SUCCESS);

const signupFailure = createAction<Error>(SIGNUP_FAILURE);

const login = createAction<{
  username: string;
  password: string;
}>(LOGIN_REQUEST);

const loginSuccess = createAction<{
  token: string;
}>(LOGIN_SUCCESS);

const loginFailure = createAction<Error>(LOGIN_FAILURE);

export {
  signup,
  signupSuccess,
  signupFailure,
  login,
  loginSuccess,
  loginFailure
};
