import { createEpic } from "./utils";
import { getJson, postJson } from "../fetch";
import * as actions from "../actions/post";

const getPostsEpic = createEpic(
  actions.getPosts,
  actions.getPostsSuccess,
  actions.getPostsFailure,
  () => getJson("api/posts")
);

const postPostEpic = createEpic(
  actions.postPost,
  actions.postPostSuccess,
  actions.postPostFailure,
  payload => postJson("api/posts", payload)
);

export { getPostsEpic, postPostEpic };
