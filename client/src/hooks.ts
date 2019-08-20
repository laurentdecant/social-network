import { useMemo } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { ActionCreator } from "./actions/types";

export function useActions<TAction extends ActionCreator>(
  actions: TAction,
  deps?: any[]
): TAction;
export function useActions<TAction extends ActionCreator>(
  actions: TAction[],
  deps?: any[]
): TAction[];
export function useActions<TAction extends ActionCreator>(
  actions: TAction[] | TAction,
  deps?: any[]
) {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map(a => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : [dispatch]
  );
}
