import { getJson } from "../fetch";
import * as actions from "../actions/post";
import { createEpic } from "./utils";

const getPostsEpic = createEpic(
  actions.getPosts,
  actions.getPostsSuccess,
  actions.getPostsFailure,
  () => getJson("api/posts")
);

export { getPostsEpic };
