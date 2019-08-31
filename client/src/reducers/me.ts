import User from "../types/User";
import { createReducer } from "./utils";
import { getMyselfSuccess } from "../actions/me";

interface State {
  user?: User;
}

const initialState: State = {};

const reducer = createReducer(initialState).addHandler(
  getMyselfSuccess,
  (state, { payload }) => ({ ...state, user: payload })
);

export { reducer as default, State };
