import { createAction } from "./utils";

const GET_FOLLOWING_REQUEST = "GET_FOLLOWING_REQUEST";
const GET_FOLLOWING_SUCCESS = "GET_FOLLOWING_SUCCESS";
const GET_FOLLOWING_FAILURE = "GET_FOLLOWING_FAILURE";
const FOLLOW_USER_REQUEST = "FOLLOW_USER_REQUEST";
const FOLLOW_USER_SUCCESS = "FOLLOW_USER_SUCCESS";
const FOLLOW_USER_FAILURE = "FOLLOW_USER_FAILURE";
const UNFOLLOW_USER_REQUEST = "UNFOLLOW_USER_REQUEST";
const UNFOLLOW_USER_SUCCESS = "UNFOLLOW_USER_SUCCESS";
const UNFOLLOW_USER_FAILURE = "UNFOLLOW_USER_FAILURE";

const getFollowing = createAction(GET_FOLLOWING_REQUEST, (ids: string[]) => ({
  ids
}));
const getFollowingSuccess = createAction(GET_FOLLOWING_SUCCESS);
const getFollowingFailure = createAction(
  GET_FOLLOWING_FAILURE,
  (err: Error) => err
);

const followUser = createAction(FOLLOW_USER_REQUEST, (userId: string) => ({
  userId
}));
const followUserSuccess = createAction(
  FOLLOW_USER_SUCCESS,
  undefined,
  (meta: { userId: string }) => meta
);
const followUserFailure = createAction(
  FOLLOW_USER_FAILURE,
  (err: Error) => err
);

const unfollowUser = createAction(UNFOLLOW_USER_REQUEST, (userId: string) => ({
  userId
}));
const unfollowUserSuccess = createAction(
  UNFOLLOW_USER_SUCCESS,
  undefined,
  (meta: { userId: string }) => meta
);
const unfollowUserFailure = createAction(
  UNFOLLOW_USER_FAILURE,
  (err: Error) => err
);

export {
  getFollowing,
  getFollowingSuccess,
  getFollowingFailure,
  followUser,
  followUserSuccess,
  followUserFailure,
  unfollowUser,
  unfollowUserSuccess,
  unfollowUserFailure
};
