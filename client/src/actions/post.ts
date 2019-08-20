import Post from "../types/Post";
import { createAction } from "./utils";

const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";
const POST_POST_REQUEST = "POST_POST_REQUEST";
const POST_POST_SUCCESS = "POST_POST_SUCCESS";
const POST_POST_FAILURE = "POST_POST_FAILURE";

const getPosts = createAction(GET_POSTS_REQUEST);
const getPostsSuccess = createAction(
  GET_POSTS_SUCCESS,
  (posts: Post[]) => posts
);
const getPostsFailure = createAction(GET_POSTS_FAILURE, (err: Error) => err);

const postPost = createAction(POST_POST_REQUEST, (message: string) => ({
  message
}));
const postPostSuccess = createAction(POST_POST_SUCCESS, (post: Post) => post);
const postPostFailure = createAction(POST_POST_FAILURE, (err: Error) => err);

export {
  getPosts,
  getPostsSuccess,
  getPostsFailure,
  postPost,
  postPostSuccess,
  postPostFailure
};
