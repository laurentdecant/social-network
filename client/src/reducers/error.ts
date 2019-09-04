import { Action } from "../actions/types";

interface State {}

const initialState: State = {};

const reducer = (state: State = initialState, action: Action) => {
  if (action.type.endsWith("_FAILURE")) {
    alert(action.payload);
  }

  return state;
};

export { reducer as default, State };
