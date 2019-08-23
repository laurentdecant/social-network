import { combineEpics } from "redux-observable";
import * as auth from "./auth";
import * as me from "./me";
import * as post from "./post";

export default combineEpics(...Object.values({ ...auth, ...me, ...post }));
