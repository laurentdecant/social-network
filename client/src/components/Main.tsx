import React from "react";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";
import styled from "styled-components";

const StyledMain = styled.main`
  flex-grow: 1;
  padding: ${({ theme }) => theme.size.large} 0;
`;

const Main = () => (
  <StyledMain>
    <PrivateRoute path="/" exact component={Home} />
  </StyledMain>
);

export default Main;
