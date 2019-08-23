import User from "../types/User";
import { createReducer } from "./utils";
import { getMe } from "../actions/me";

interface State {
  user?: User;
}

const initialState: State = {};

const reducer = createReducer(initialState).addHandler(
  getMe,
  (state, { payload }) => ({ ...state, user: payload })
);

export { reducer as default, State };
