import { Action } from "redux";

export interface PayloadAction<T = any, P = any> extends Action<T> {
  payload: P;
}
