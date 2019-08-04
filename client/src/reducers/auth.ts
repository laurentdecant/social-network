import { createReducer } from "./utils";
import { signup, login } from "../actions/auth";

interface State {
  token: string;
}

const initialState: State = {
  token: ""
};

const reducer = createReducer(initialState)
  .addHandler(signup, (state, action) => state)
  .addHandler(login, (state, action) => state);

export { reducer as default, State };
