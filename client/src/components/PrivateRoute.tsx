import React from "react";
import { Route, RouteProps } from "react-router";
import { useSelector } from "react-redux";
import * as authSelectors from "../selectors/auth";
import SignUp from "./SignupForm";

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
