import { createEpic } from "./utils";
import { getJson } from "../fetch";
import * as userActions from "../actions/user";

const getUsersEpic = createEpic(
  userActions.getUsers,
  userActions.getUsersSuccess,
  userActions.getUsersFailure,
  () => getJson("/api/users")
);

export { getUsersEpic };
