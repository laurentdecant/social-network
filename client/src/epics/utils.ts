import { Observable, of, from } from "rxjs";
import { catchError, filter, map, mergeMap } from "rxjs/operators";
import { Action, ActionCreator } from "../actions/types";
import { isActionType } from "../actions/utils";

export const createEpic = <TRequest extends ActionCreator>(
  request: TRequest,
  success: ActionCreator,
  failure: ActionCreator,
  fetch: (action: ReturnType<TRequest>) => Promise<any>
) => (action$: Observable<Action>) =>
  action$.pipe(
    filter(isActionType(request)),
    mergeMap((action: ReturnType<TRequest>) =>
      from(fetch(action.payload)).pipe(
        map(success),
        catchError((err: Error) => of(failure(err)))
      )
    )
  );
