import { Selector, Action, ActionCreator } from "../actions/types";
import { Handler, Reducer } from "./types";

export function createReducer<TState>(
  initialState: TState,
  handlers: Handler<TState> = {}
) {
  const reducer = (state: TState = initialState, action: Action): TState =>
    handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action)
      : state;
  reducer.addHandler = <TPayloadSelector extends Selector>(
    ActionCreator: ActionCreator<TPayloadSelector>,
    reducer: Reducer<TState, ReturnType<TPayloadSelector>>
  ) =>
    createReducer<TState>(initialState, {
      ...handlers,
      [ActionCreator.getType()]: reducer
    });
  return reducer;
}
