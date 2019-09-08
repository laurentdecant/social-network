import { createEpic } from "./utils";
import { getJson, postJson, deleteJson } from "../fetch";
import * as postActions from "../actions/post";

const getPostsEpic = createEpic(
  postActions.getPosts,
  postActions.getPostsSuccess,
  postActions.getPostsFailure,
  () => getJson("/api/posts")
);

const createPostEpic = createEpic(
  postActions.createPost,
  postActions.createPostSuccess,
  postActions.createPostFailure,
  payload => postJson("/api/posts", payload)
);

const deletePostEpic = createEpic(
  postActions.deletePost,
  postActions.deletePostSuccess,
  postActions.deletePostFailure,
  payload => deleteJson(`/api/posts/${payload.id}`)
);

export { getPostsEpic, createPostEpic, deletePostEpic };
