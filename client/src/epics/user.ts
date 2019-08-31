import { createEpic } from "./utils";
import { getJson } from "../fetch";
import * as actions from "../actions/user";

const getUsersEpic = createEpic(
  actions.getUsers,
  actions.getUsersSuccess,
  actions.getUsersFailure,
  () => getJson("api/users")
);

export { getUsersEpic };
