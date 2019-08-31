import { State } from "../reducers";

const getMyself = ({ me }: State) => me.user;

export { getMyself };
