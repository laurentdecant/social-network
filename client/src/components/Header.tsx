import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import * as authSelectors from "../selectors/auth";
import { clickable } from "../styles/effects";
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

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  height: 100%;
`;

const Brand = styled(Link)`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.size.mediumLarge};
  height: 100%;
  margin-right: ${({ theme }) => theme.size.large};
`;

const BrandIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.size.large};
  margin-right: ${({ theme }) => theme.size.small};
`;

const StyledNavLink = styled(NavLink)`
  align-items: center;
  display: flex;
  height: 100%;
  padding: 0 ${({ theme }) => theme.size.medium};
  position: relative;

  ${clickable}
`;

const StyledIcon = styled(Icon)`
  margin-right: ${({ theme }) => theme.size.small};
`;

const links = [
  {
    to: "/posts",
    icon: "list",
    text: "Posts"
  },
  {
    to: "/users",
    icon: "group",
    text: "Users"
  }
];

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);

  return (
    <StyledHeader>
      <StyledNav>
        <Brand to="/">
          <BrandIcon type="share" />
          Social Network
        </Brand>

        {links.map(link => (
          <StyledNavLink to={link.to}>
            {
              //@ts-ignore
              <StyledIcon type={link.icon} />
            }
            {link.text}
          </StyledNavLink>
        ))}
      </StyledNav>

      {isLoggedIn ? <User /> : <Login />}
    </StyledHeader>
  );
};

export default Header;
