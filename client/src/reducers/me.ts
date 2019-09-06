import User from "../types/User";
import { createReducer } from "./utils";
import * as meActions from "../actions/me";

interface State {
  user?: User;
}

const initialState: State = {};

const reducer = createReducer(initialState).addHandler(
  meActions.getMyselfSuccess,
  (state, { payload }) => ({ ...state, user: payload })
);

export { reducer as default, State };
