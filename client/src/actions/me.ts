import User from "../types/User";
import { createAction } from "./utils";

const GET_ME_REQUEST = "GET_ME_REQUEST";
const GET_ME_SUCCESS = "GET_ME_SUCCESS";
const GET_ME_FAILURE = "GET_ME_FAILURE";

const getMe = createAction(GET_ME_REQUEST);
const getMeSuccess = createAction(GET_ME_SUCCESS, (user: User) => user);
const getMeFailure = createAction(GET_ME_FAILURE, (err: Error) => err);

export { getMe, getMeSuccess, getMeFailure };
