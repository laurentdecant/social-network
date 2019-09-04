import { combineEpics } from "redux-observable";
import * as auth from "./auth";
import * as me from "./me";
import * as post from "./post";
import * as user from "./user";
import * as follower from "./follower";

export default combineEpics(
  ...Object.values({
    ...auth,
    ...me,
    ...post,
    ...user,
    ...follower
  })
);
