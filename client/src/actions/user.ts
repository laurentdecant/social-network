import User from "../types/User";
import { createAction } from "./utils";

const GET_USERS_REQUEST = "GET_USERS_REQUEST";
const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "GET_USERS_FAILURE";

const getUsers = createAction(GET_USERS_REQUEST);
const getUsersSuccess = createAction(
  GET_USERS_SUCCESS,
  (users: User[]) => users
);
const getUsersFailure = createAction(GET_USERS_FAILURE, (err: Error) => err);

export { getUsers, getUsersSuccess, getUsersFailure };
