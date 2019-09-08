import { createReducer } from "./utils";
import Post from "../types/Post";
import * as postActions from "../actions/post";

type State = Post[];

const initialState: State = [];

const reducer = createReducer(initialState)
  .addHandler(postActions.getPostsSuccess, (state, { payload }) => payload)
  .addHandler(postActions.createPostSuccess, (state, { payload }) => [
    payload,
    ...state
  ])
  .addHandler(postActions.deletePostSuccess, (state, { meta }) => [
    ...state.filter(post => post.id !== meta.id)
  ]);

export { reducer as default, State };
