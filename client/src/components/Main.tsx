import React from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import Posts from "./posts/Posts";
import PrivateRoute from "./PrivateRoute";

const StyledMain = styled.main`
  flex-grow: 1;
  padding: ${({ theme }) => theme.size.large} 0;
`;

const Main = () => (
  <StyledMain>
    <PrivateRoute path="/" exact component={Posts} />
    <PrivateRoute path="/posts" component={Posts} />
  </StyledMain>
);

export default Main;
