import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as authSelectors from "../selectors/auth";
import Icon from "./core/Icon";
import Login from "./Login";
import User from "./User";

const StyledHeader = styled.header`
  align-items: center;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  flex-shrink: 0;
  height: ${({ theme }) => theme.size.extraLarge};
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.size.large};
`;

const Home = styled(Link)`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.size.mediumLarge};

  ${Icon} {
    margin-right: ${({ theme }) => theme.size.small};
  }
`;

const StyledIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.size.large};
`;

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);

  return (
    <StyledHeader>
      <Home to="/">
        <StyledIcon type="group" />
        Social Network
      </Home>

      {isLoggedIn ? <User /> : <Login />}
    </StyledHeader>
  );
};

export default Header;
