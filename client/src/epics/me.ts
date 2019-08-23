import { getJson } from "../fetch";
import * as actions from "../actions/me";
import { createEpic } from "./utils";

const signupEpic = createEpic(
  actions.getMe,
  actions.getMeSuccess,
  actions.getMeFailure,
  () => getJson("api/me")
);

export { signupEpic };
