import User from "../types/User";
import { createReducer } from "./utils";
import { getUsersSuccess } from "../actions/user";
import { followUserSuccess } from "../actions/follower";

type State = User[];

const initialState: State = [];

const reducer = createReducer(initialState)
  .addHandler(getUsersSuccess, (state, action) => action.payload)
  .addHandler(followUserSuccess, (state, { meta }) => [
    ...state.map(user =>
      user.id === meta.userId ? { ...user, isFollowed: true } : user
    )
  ]);

export { reducer as default, State };
