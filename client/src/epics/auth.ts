import { Observable, of } from "rxjs";
import { catchError, filter, map, mergeMap } from "rxjs/operators";
import { Action } from "../actions/types";
import * as actions from "../actions/auth";
import { isActionType } from "../actions/utils";
import { postJson } from "../fetch";

const signupEpic = (action$: Observable<Action>) =>
  action$.pipe(
    filter(isActionType(actions.signup)),
    mergeMap((action: Action) => postJson("/auth/signup", action.payload)),
    map(actions.signupSuccess),
    catchError((err: any) => of(actions.signupFailure(err)))
  );

const loginEpic = (action$: Observable<Action>) =>
  action$.pipe(
    filter(isActionType(actions.login)),
    mergeMap((action: Action) => postJson("/auth/login", action.payload)),
    map(actions.loginSuccess),
    catchError((err: any) => of(actions.loginFailure(err)))
  );

export { signupEpic, loginEpic };
