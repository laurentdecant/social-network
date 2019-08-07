import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Login from "./Login";

const StyledHeader = styled.header`
  align-items: center;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  height: ${({ theme }) => theme.space.xl};
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.space.lg};
`;

const Home = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

const Header = () => {
  return (
    <StyledHeader>
      <Home to="/">Social Network</Home>

      <Login />
    </StyledHeader>
  );
};

export default Header;
