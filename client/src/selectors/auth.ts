import { State } from "../reducers";

const getToken = ({ auth }: State) => {
  return auth.token;
};

const isLoggedIn = ({ auth }: State) => {
  return !!auth.token;
};

export { getToken, isLoggedIn };
