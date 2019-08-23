import { createReducer } from "./utils";
import { signupSuccess, loginSuccess } from "../actions/auth";

interface State {
  token?: string;
}

const initialState: State = {};

const reducer = createReducer(initialState)
  .addHandler(signupSuccess, (state, { payload }) => ({
    ...state,
    token: payload.token
  }))
  .addHandler(loginSuccess, (state, { payload }) => ({
    ...state,
    token: payload.token
  }));

export { reducer as default, State };
