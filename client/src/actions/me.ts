import User from "../types/User";
import { createAction } from "./utils";

const GET_MYSELF_REQUEST = "GET_MYSELF_REQUEST";
const GET_MYSELF_SUCCESS = "GET_MYSELF_SUCCESS";
const GET_MYSELF_FAILURE = "GET_MYSELF_FAILURE";

const getMyself = createAction(GET_MYSELF_REQUEST);
const getMyselfSuccess = createAction(GET_MYSELF_SUCCESS, (user: User) => user);
const getMyselfFailure = createAction(GET_MYSELF_FAILURE, (err: Error) => err);

export { getMyself, getMyselfSuccess, getMyselfFailure };
