import React, { FormEvent } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useAction } from "../hooks";
import * as authActions from "../actions/auth";
import * as authSelectors from "../selectors/auth";
import Button from "./core/Button";
import Input from "./core/Input";

const StyledInput = styled(Input)`
  margin-right: ${({ theme }) => theme.space.medium};
`;

const Login = () => {
  const login = useAction(authActions.login);
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const [username, password] = (event.target as any) as Array<
      HTMLInputElement
    >;
    login(username.value, password.value);
  };

  return !isLoggedIn ? (
    <form onSubmit={handleSubmit}>
      <StyledInput type="text" placeholder="Username" />
      <StyledInput type="password" placeholder="Password" />
      <Button type="submit">Log in</Button>
    </form>
  ) : (
    <></>
  );
};

export default Login;
