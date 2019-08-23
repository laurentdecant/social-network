import { State } from "../reducers";

const getMe = ({ me }: State) => me.user;

export { getMe };
