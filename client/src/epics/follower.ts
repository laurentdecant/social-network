import { createEpic } from "./utils";
import * as followerActions from "../actions/follower";
import { postJson, deleteJson, getJson } from "../fetch";

const getFollowingEpic = createEpic(
  followerActions.getFollowing,
  followerActions.getFollowingSuccess,
  followerActions.getFollowingFailure,
  payload => getJson("/api/me/following", payload)
);

const followUserEpic = createEpic(
  followerActions.followUser,
  followerActions.followUserSuccess,
  followerActions.followUserFailure,
  payload => postJson("/api/me/following", payload)
);

const unfollowUserEpic = createEpic(
  followerActions.unfollowUser,
  followerActions.unfollowUserSuccess,
  followerActions.unfollowUserFailure,
  payload => deleteJson(`/api/me/following/${payload.userId}`)
);

export { getFollowingEpic, followUserEpic, unfollowUserEpic };
