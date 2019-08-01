const ActionTypes = {
  SignupRequest: "SIGNUP_REQUEST",
  SignupSuccess: "SIGNUP_SUCCESS",
  SignupFailure: "SIGNUP_FAILURE",
  LoginRequest: "LOGIN_REQUEST",
  LoginSuccess: "LOGIN_SUCCESS",
  LoginFailure: "LOGIN_FAILURE"
};

const signup = (username: string, password: string) => {
  return {
    type: ActionTypes.SignupRequest,
    payload: {
      username,
      password
    }
  };
};

const login = (username: string, password: string) => {
  return {
    type: ActionTypes.LoginRequest,
    payload: {
      username,
      password
    }
  };
};

export { ActionTypes, signup, login };
