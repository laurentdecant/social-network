import { State } from "../reducers";

const isLoggedIn = ({ auth }: State) => {
  return !!auth.token;
};

export { isLoggedIn };
