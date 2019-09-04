import { Selector, Action, ActionCreator } from "./types";

export function createAction<
  TPayloadSelector extends Selector,
  TMetaSelector extends Selector
>(
  type: string,
  payloadSelector?: TPayloadSelector,
  metaSelector?: TMetaSelector
): ActionCreator<TPayloadSelector, TMetaSelector> {
  const actionCreator = (
    ...args: Parameters<TPayloadSelector> & Parameters<TMetaSelector>
  ): Action<ReturnType<TPayloadSelector>, ReturnType<TMetaSelector>> => ({
    type,
    payload: payloadSelector ? payloadSelector(...args) : args[0],
    meta: metaSelector && metaSelector(args[args.length - 1])
  });
  actionCreator.getType = () => type;
  return actionCreator;
}

export function isActionType(actionCreator: ActionCreator) {
  return function(action: Action) {
    return actionCreator.getType() === action.type;
  };
}
