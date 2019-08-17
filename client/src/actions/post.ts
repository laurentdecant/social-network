import Post from "../../../server/src/types/Post";
import { createAction } from "./utils";

const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

const getPosts = createAction(GET_POSTS_REQUEST);
const getPostsSuccess = createAction(
  GET_POSTS_SUCCESS,
  (posts: Post[]) => posts
);
const getPostsFailure = createAction(GET_POSTS_FAILURE, (err: Error) => err);

export { getPosts, getPostsSuccess, getPostsFailure };
