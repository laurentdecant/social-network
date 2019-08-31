import React from "react";
import { useSelector } from "react-redux";
import { Route, RouteProps } from "react-router";
import * as authSelectors from "../selectors/auth";
import SignUp from "./auth/Signup";

const PrivateRoute = ({ component: Component, ...rest }: RouteProps) => {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? Component && <Component {...props} /> : <SignUp />
      }
    />
  );
};

export default PrivateRoute;
