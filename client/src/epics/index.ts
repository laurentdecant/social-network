import { combineEpics } from "redux-observable";
import * as auth from "./auth";
import * as post from "./post";

export default combineEpics(...Object.values({ ...auth, ...post }));
