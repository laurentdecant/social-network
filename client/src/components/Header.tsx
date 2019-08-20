import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Login from "./Login";
import Icon from "./core/Icon";
import { useSelector } from "react-redux";
import * as authSelectors from "../selectors/auth";

const StyledHeader = styled.header`
  align-items: center;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  height: ${({ theme }) => theme.space.extraLarge};
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.space.large};
`;

const Home = styled(Link)`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.large};

  ${Icon} {
    margin-right: ${({ theme }) => theme.space.small};
  }
`;

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);

  return (
    <StyledHeader>
      <Home to="/">
        <Icon type="group" />
        Social Network
      </Home>

      {isLoggedIn ? <Icon type="person" /> : <Login />}
    </StyledHeader>
  );
};

export default Header;
