import { Action, ActionCreator } from "../actions/types";
import { Handler, Reducer } from "./types";

export function createReducer<TState>(
  initialState: TState,
  handlers: Handler<TState> = {}
) {
  const reducer = (state: TState = initialState, action: Action): TState =>
    handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action)
      : state;
  reducer.addHandler = <TPayload>(
    actionCreator: ActionCreator<TPayload>,
    reducer: Reducer<TState, TPayload>
  ) =>
    createReducer<TState>(initialState, {
      ...handlers,
      [actionCreator.getType()]: reducer
    });
  return reducer;
}
