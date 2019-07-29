import { State } from "../reducers";

export function isLoggedIn({ auth }: State) {
  return !!auth.token;
}
