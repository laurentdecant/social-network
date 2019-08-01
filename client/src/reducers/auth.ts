import { Action } from "redux";

interface State {
  token: string;
}

const initialState: State = {
  token: ""
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { reducer as default, State };
