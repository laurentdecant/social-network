import React, { FormEvent } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useActions } from "../../hooks";
import * as authActions from "../../actions/auth";
import * as authSelectors from "../../selectors/auth";
import Input from "../core/Input";
import Button from "../core/Button";

const StyledInput = styled(Input)`
  margin-right: ${({ theme }) => theme.size.medium};
`;

const StyledButton = styled(Button)`
  background: ${({ theme }) => theme.color.gray};
  color: ${({ theme }) => theme.color.onBackground};
`;

const Login = () => {
  const login = useActions(authActions.login);
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
      <StyledButton type="submit">Log in</StyledButton>
    </form>
  ) : (
    <></>
  );
};

export default Login;
