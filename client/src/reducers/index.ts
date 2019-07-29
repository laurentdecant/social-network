import { combineReducers } from "redux";
import * as auth from "./auth";

export interface State {
  auth: auth.State;
}

export default combineReducers<State>({
  auth: auth.reducer
});
