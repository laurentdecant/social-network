import { Selector, Action, ActionCreator } from "./types";

export function createAction<TPayloadSelector extends Selector>(
  type: string,
  payloadSelector: TPayloadSelector
): ActionCreator<TPayloadSelector> {
  const actionCreator = (
    ...params: Parameters<TPayloadSelector>
  ): Action<ReturnType<TPayloadSelector>> => ({
    type,
    payload: payloadSelector(...params)
  });
  actionCreator.getType = () => type;
  return actionCreator;
}

export function isActionType(actionCreator: ActionCreator) {
  return function(action: Action) {
    return actionCreator.getType() === action.type;
  };
}
