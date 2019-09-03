import { createReducer } from "./utils";
import Post from "../types/Post";
import { getPostsSuccess, postPostSuccess } from "../actions/post";

type State = Post[];

const initialState: State = [];

const reducer = createReducer(initialState)
  .addHandler(getPostsSuccess, (state, { payload }) => payload)
  .addHandler(postPostSuccess, (state, { payload }) => [payload, ...state]);

export { reducer as default, State };
