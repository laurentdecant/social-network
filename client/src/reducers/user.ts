import User from "../types/User";
import { createReducer } from "./utils";
import { getUsersSuccess } from "../actions/user";

type State = User[];

const initialState: State = [];

const reducer = createReducer(initialState).addHandler(
  getUsersSuccess,
  (state, action) => action.payload
);

export { reducer as default, State };
