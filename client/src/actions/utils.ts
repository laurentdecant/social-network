import { Selector, Action, ActionCreator } from "./types";

export function createAction<TPayloadSelector extends Selector>(
  type: string,
  payloadSelector?: TPayloadSelector
): ActionCreator<TPayloadSelector> {
  const actionCreator = (
    ...args: Parameters<TPayloadSelector>
  ): Action<ReturnType<TPayloadSelector>> => ({
    type,
    payload: payloadSelector && payloadSelector(...args)
  });
  actionCreator.getType = () => type;
  return actionCreator;
}

export function isActionType(actionCreator: ActionCreator) {
  return function(action: Action) {
    return actionCreator.getType() === action.type;
  };
}
