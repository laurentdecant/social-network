import { Action } from "../actions/types";

export interface Handler<TState> {
  [key: string]: Reducer<TState>;
}

export interface Reducer<TState, TPayload = any> {
  (state: TState, action: Action<TPayload>): TState;
}
