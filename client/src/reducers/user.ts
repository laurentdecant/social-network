import User from "../types/User";
import { createReducer } from "./utils";
import * as userActions from "../actions/user";
import * as followerActions from "../actions/follower";

type State = User[];

const initialState: State = [];

const reducer = createReducer(initialState)
  .addHandler(userActions.getUsersSuccess, (state, action) => action.payload)
  .addHandler(
    followerActions.getFollowingSuccess,
    (state, { payload, meta }) => [
      ...state.map(user => {
        const index = meta.findIndex(id => id === user.id);
        return index > -1 ? { ...user, isFollowed: payload[index] } : user;
      })
    ]
  )
  .addHandler(followerActions.followUserSuccess, (state, { meta }) => [
    ...state.map(user =>
      user.id === meta.userId ? { ...user, isFollowed: true } : user
    )
  ])
  .addHandler(followerActions.unfollowUserSuccess, (state, { meta }) => [
    ...state.map(user =>
      user.id === meta.userId ? { ...user, isFollowed: false } : user
    )
  ]);

export { reducer as default, State };
