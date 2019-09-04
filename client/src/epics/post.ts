import { createEpic } from "./utils";
import { getJson, postJson } from "../fetch";
import * as postActions from "../actions/post";

const getPostsEpic = createEpic(
  postActions.getPosts,
  postActions.getPostsSuccess,
  postActions.getPostsFailure,
  () => getJson("/api/posts")
);

const postPostEpic = createEpic(
  postActions.postPost,
  postActions.postPostSuccess,
  postActions.postPostFailure,
  payload => postJson("/api/posts", payload)
);

export { getPostsEpic, postPostEpic };
