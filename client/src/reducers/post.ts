import Post from "../../../server/src/types/Post";
import { createReducer } from "./utils";
import { getPostsSuccess } from "../actions/post";

type State = Post[];

const initialState: State = [];

const reducer = createReducer(initialState).addHandler(
  getPostsSuccess,
  (state, { payload }) => payload
);

export { reducer as default, State };
