import { createAction } from "./utils";

const FOLLOW_USER_REQUEST = "FOLLOW_USER_REQUEST";
const FOLLOW_USER_SUCCESS = "FOLLOW_USER_SUCCESS";
const FOLLOW_USER_FAILURE = "FOLLOW_USER_FAILURE";

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

export { followUser, followUserSuccess, followUserFailure };
