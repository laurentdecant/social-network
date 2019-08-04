import { Action, ActionCreator } from "./types";

export function createAction<TPayload>(type: string) {
  const creator = (payload: TPayload) => ({
    type,
    payload
  });
  creator.getType = () => type;
  return creator;
}

export function isActionType<TPayload>(actionCreator: ActionCreator<TPayload>) {
  return function(action: Action) {
    return actionCreator.getType() === action.type;
  };
}
