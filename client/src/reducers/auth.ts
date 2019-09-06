import { createReducer } from "./utils";
import * as authActions from "../actions/auth";

interface State {
  token?: string;
}

const initialState: State = {};

const reducer = createReducer(initialState)
  .addHandler(authActions.signupSuccess, (state, { payload }) => ({
    ...state,
    token: payload.token
  }))
  .addHandler(authActions.loginSuccess, (state, { payload }) => ({
    ...state,
    token: payload.token
  }));

export { reducer as default, State };
