import { StateObservable } from "redux-observable";
import { Observable, of, from } from "rxjs";
import { catchError, filter, map, mergeMap, tap } from "rxjs/operators";
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
  ) => (headers: any) => Promise<any>
) => (
  action$: Observable<Action>,
  state$: StateObservable<State>
): Observable<Action> =>
  action$.pipe(
    filter(isActionType(request)),
    mergeMap((action: ReturnType<ActionCreator<TPayloadSelector>>) =>
      from(
        fetch(action.payload)({
          Authorization: `Bearer ${getToken(state$.value)}`
        })
      ).pipe(
        tap(console.log),
        map(success),
        catchError((err: Error) => of(failure(err)))
      )
    )
  );
