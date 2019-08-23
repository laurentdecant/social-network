import { compose, createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { Action } from "./actions/types";
import { login } from "./actions/auth";
import rootEpic from "./epics";
import rootReducer, { State } from "./reducers";

export default function configureStore() {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const epicMiddleware = createEpicMiddleware<Action, Action, State>();

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  const { USERNAME, PASSWORD } = process.env;
  //@ts-ignore
  store.dispatch(login(USERNAME, PASSWORD));

  return store;
}
