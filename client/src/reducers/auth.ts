import { Action } from "redux";

export interface State {
  token: string;
}

const initialState: State = {
  token: ""
};

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};
