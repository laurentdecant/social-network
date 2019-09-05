import { createEpic } from "./utils";
import { getJson } from "../fetch";
import * as userActions from "../actions/user";
import * as followerActions from "../actions/follower";

const getUsersEpic = createEpic(
  userActions.getUsers,
  userActions.getUsersSuccess,
  userActions.getUsersFailure,
  () => getJson("/api/users"),
  payload => {
    const userIds = payload.map(user => user.id);
    return followerActions.getFollowing(userIds);
  }
);

export { getUsersEpic };
