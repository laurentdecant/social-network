import { useCallback } from "react";
import { useDispatch } from "react-redux";

function useAction<TAction extends (...params: any[]) => any>(action: TAction) {
  const dispatch = useDispatch();
  return useCallback(
    (...params: Parameters<TAction>) => dispatch(action(...params)),
    [dispatch]
  );
}

export { useAction };
