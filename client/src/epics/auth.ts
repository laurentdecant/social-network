import { Action } from "redux";
import { Observable } from "rxjs";
import { filter, mapTo } from "rxjs/operators";
import { ActionTypes } from "../actions/auth";

const signupEpic = (action$: Observable<Action>) =>
  action$.pipe(
    filter(action => action.type === ActionTypes.SignupRequest),
    mapTo({ type: ActionTypes.SignupSuccess })
  );

const loginEpic = (action$: Observable<Action>) =>
  action$.pipe(
    filter(action => action.type === ActionTypes.LoginRequest),
    mapTo({ type: ActionTypes.LoginSuccess })
  );

export { signupEpic, loginEpic };
