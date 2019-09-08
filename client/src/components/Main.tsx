import React from "react";
import styled from "styled-components";
import PrivateRoute from "./PrivateRoute";
import Posts from "./post/Posts";
import Users from "./user/Users";

const StyledMain = styled.main`
  flex-grow: 1;
  padding: ${({ theme }) => theme.size.large} 0;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Main = () => (
  <StyledMain>
    <PrivateRoute path="/" exact component={Posts} />
    <PrivateRoute path="/posts" component={Posts} />
    <PrivateRoute path="/users" component={Users} />
  </StyledMain>
);

export default Main;
