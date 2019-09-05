import { createEpic } from "./utils";
import * as followerActions from "../actions/follower";
import { postJson, deleteJson, getJson } from "../fetch";

const getFollowingEpic = createEpic(
  followerActions.getFollowing,
  followerActions.getFollowingSuccess,
  followerActions.getFollowingFailure,
  payload => getJson("/api/followers", payload)
);

const followUserEpic = createEpic(
  followerActions.followUser,
  followerActions.followUserSuccess,
  followerActions.followUserFailure,
  payload => postJson("/api/followers", payload)
);

const unfollowUserEpic = createEpic(
  followerActions.unfollowUser,
  followerActions.unfollowUserSuccess,
  followerActions.unfollowUserFailure,
  payload => deleteJson(`/api/followers/${payload.userId}`)
);

export { getFollowingEpic, followUserEpic, unfollowUserEpic };
