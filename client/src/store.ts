import { compose, createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "./reducers";
import rootEpic from "./epics";

export default function configureStore() {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const epicMiddleware = createEpicMiddleware();

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
}
