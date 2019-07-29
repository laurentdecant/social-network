import React from "react";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";

const Main = () => (
  <>
    <PrivateRoute path="/" exact component={Home} />
  </>
);

export default Main;
