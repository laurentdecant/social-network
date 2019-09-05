import { StateObservable } from "redux-observable";
import { Observable, of, from } from "rxjs";
import { catchError, filter, map, mergeMap, tap } from "rxjs/operators";
import { Action, ActionCreator, Selector } from "../actions/types";
import { isActionType } from "../actions/utils";
import { State } from "../reducers";
import { getToken } from "../selectors/auth";

export const createEpic = <
  TRequestSelector extends Selector,
  TSuccessSelector extends Selector
>(
  request: ActionCreator<TRequestSelector>,
  success: ActionCreator<TSuccessSelector>,
  failure: ActionCreator,
  fetch: (
    payload: ReturnType<TRequestSelector>
  ) => (headers: any) => Promise<any>,
  next?: (payload: ReturnType<TSuccessSelector>) => Action
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
        map((value: Parameters<TSuccessSelector>) =>
          //@ts-ignore
          success(value, action.payload)
        ),
        mergeMap(action =>
          next ? of(action, next(action.payload)) : of(action)
        ),
        catchError((err: Error) => of(failure(err)))
      )
    )
  );
