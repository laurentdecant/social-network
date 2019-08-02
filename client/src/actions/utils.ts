import { PayloadAction } from "./types";

export function createAction<T, P>(type: T, payload: P): PayloadAction<T, P> {
  return {
    type,
    payload
  };
}
