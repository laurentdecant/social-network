import { StateObservable } from "redux-observable";
import { Observable, of, from } from "rxjs";
import { catchError, filter, map, mergeMap } from "rxjs/operators";
import { Action, ActionCreator, Selector } from "../actions/types";
import { isActionType } from "../actions/utils";
import { State } from "../reducers";
import { getToken } from "../selectors/auth";

export const createEpic = <TPayloadSelector extends Selector>(
  request: ActionCreator<TPayloadSelector>,
  success: ActionCreator,
  failure: ActionCreator,
  fetch: (
    payload: ReturnType<TPayloadSelector>
  ) => (headers: any) => Promise<any>,
  next?: ActionCreator
) => (
  action$: Observable<Action>,
  state$: StateObservable<State>
): Observable<Action> =>
  action$.pipe(
    filter(isActionType(request)),
    mergeMap((action: Action) =>
      from(
        fetch(action.payload)({
          Authorization: `Bearer ${getToken(state$.value)}`
        })
      ).pipe(
        map(success),
        mergeMap(action => (next ? of(action, next()) : of(action))),
        catchError((err: Error) => of(failure(err)))
      )
    )
  );
