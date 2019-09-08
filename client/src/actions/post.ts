import Post from "../types/Post";
import { createAction } from "./utils";

const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";
const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";
const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";

const getPosts = createAction(GET_POSTS_REQUEST);
const getPostsSuccess = createAction(
  GET_POSTS_SUCCESS,
  (posts: Post[]) => posts
);
const getPostsFailure = createAction(GET_POSTS_FAILURE, (err: Error) => err);

const createPost = createAction(CREATE_POST_REQUEST, (message: string) => ({
  message
}));
const createPostSuccess = createAction(
  CREATE_POST_SUCCESS,
  (post: Post) => post
);
const createPostFailure = createAction(
  CREATE_POST_FAILURE,
  (err: Error) => err
);

const deletePost = createAction(DELETE_POST_REQUEST, (id: string) => ({ id }));
const deletePostSuccess = createAction(
  DELETE_POST_SUCCESS,
  undefined,
  (meta: { id: string }) => meta
);
const deletePostFailure = createAction(
  DELETE_POST_FAILURE,
  (err: Error) => err
);

export {
  getPosts,
  getPostsSuccess,
  getPostsFailure,
  createPost,
  createPostSuccess,
  createPostFailure,
  deletePost,
  deletePostSuccess,
  deletePostFailure
};
