import { Observable, of, from } from "rxjs";
import { catchError, filter, map, mergeMap } from "rxjs/operators";
import { postJson } from "../fetch";
import { Action } from "../actions/types";
import { isActionType } from "../actions/utils";
import * as actions from "../actions/auth";

const signupEpic = (action$: Observable<Action>) =>
  action$.pipe(
    filter(isActionType(actions.signup)),
    mergeMap((action: Action) =>
      from(postJson("/auth/signup", action.payload)).pipe(
        map(actions.signupSuccess),
        catchError((err: Error) => of(actions.signupFailure(err)))
      )
    )
  );

const loginEpic = (action$: Observable<Action>) =>
  action$.pipe(
    filter(isActionType(actions.login)),
    mergeMap((action: Action) =>
      from(postJson("/auth/login", action.payload)).pipe(
        map(actions.loginSuccess),
        catchError((err: Error) => of(actions.loginFailure(err)))
      )
    )
  );

export { signupEpic, loginEpic };
