import { createEpic } from "./utils";
import * as followerActions from "../actions/follower";
import { postJson } from "../fetch";

const followUserEpic = createEpic(
  followerActions.followUser,
  followerActions.followUserSuccess,
  followerActions.followUserFailure,
  payload => postJson("/api/followers", payload)
);

export { followUserEpic };
