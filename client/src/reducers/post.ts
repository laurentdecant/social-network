import { createReducer } from "./utils";
import Post from "../types/Post";
import * as postActions from "../actions/post";

type State = Post[];

const initialState: State = [];

const reducer = createReducer(initialState)
  .addHandler(postActions.getPostsSuccess, (state, { payload }) => payload)
  .addHandler(postActions.postPostSuccess, (state, { payload }) => [
    payload,
    ...state
  ]);

export { reducer as default, State };
