import { createAction } from "./utils";
import { PayloadAction } from "./types";

const ActionTypes = {
  SignupRequest: "SIGNUP_REQUEST",
  SignupSuccess: "SIGNUP_SUCCESS",
  SignupFailure: "SIGNUP_FAILURE",
  LoginRequest: "LOGIN_REQUEST",
  LoginSuccess: "LOGIN_SUCCESS",
  LoginFailure: "LOGIN_FAILURE"
};

interface SignupRequestPayload {
  username: string;
  password: string;
}

interface SignUpRequestAction
  extends PayloadAction<
    typeof ActionTypes.SignupRequest,
    SignupRequestPayload
  > {}

const signup = (payload: SignupRequestPayload): SignUpRequestAction =>
  createAction(ActionTypes.SignupRequest, payload);

interface SignupSuccessPayload {
  token: string;
}

interface SignupSuccessAction
  extends PayloadAction<
    typeof ActionTypes.SignupRequest,
    SignupSuccessPayload
  > {}

const signupSuccess = (payload: SignupSuccessPayload): SignupSuccessAction =>
  createAction(ActionTypes.SignupSuccess, payload);

const signupFailure = (payload: Error) =>
  createAction(ActionTypes.SignupFailure, payload);

interface LoginRequestPayload {
  username: string;
  password: string;
}

interface LoginRequestAction
  extends PayloadAction<typeof ActionTypes.LoginRequest, LoginRequestPayload> {}

const login = (payload: LoginRequestPayload): LoginRequestAction =>
  createAction(ActionTypes.LoginRequest, payload);

interface LoginSuccessPayload {
  token: string;
}

interface LoginSuccessAction
  extends PayloadAction<typeof ActionTypes.LoginSuccess, LoginSuccessPayload> {}

const loginSuccess = (payload: LoginSuccessPayload): LoginSuccessAction =>
  createAction(ActionTypes.LoginSuccess, payload);

const loginFailure = (payload: Error) =>
  createAction(ActionTypes.LoginFailure, payload);

export {
  ActionTypes,
  signup,
  signupSuccess,
  signupFailure,
  login,
  loginSuccess,
  loginFailure
};
