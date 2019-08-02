import { Observable, of } from "rxjs";
import { catchError, filter, map, mergeMap } from "rxjs/operators";
import { PayloadAction } from "../actions/types";
import {
  ActionTypes,
  signupSuccess,
  signupFailure,
  loginSuccess,
  loginFailure
} from "../actions/auth";
import { postJson } from "../fetch";

const signupEpic = (action$: Observable<PayloadAction>) =>
  action$.pipe(
    filter(action => action.type === ActionTypes.SignupRequest),
    mergeMap((action: PayloadAction) =>
      postJson("/auth/signup", action.payload)
    ),
    map(signupSuccess),
    catchError((err: any) => of(signupFailure(err)))
  );

const loginEpic = (action$: Observable<PayloadAction>) =>
  action$.pipe(
    filter(action => action.type === ActionTypes.LoginRequest),
    mergeMap((action: PayloadAction) =>
      postJson("/auth/login", action.payload)
    ),
    map(loginSuccess),
    catchError((err: any) => of(loginFailure(err)))
  );

export { signupEpic, loginEpic };
