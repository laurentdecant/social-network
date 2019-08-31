import { createEpic } from "./utils";
import { getJson } from "../fetch";
import * as actions from "../actions/me";

const signupEpic = createEpic(
  actions.getMyself,
  actions.getMyselfSuccess,
  actions.getMyselfFailure,
  () => getJson("api/me")
);

export { signupEpic };
