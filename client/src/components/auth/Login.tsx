import React, { FormEvent } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useActions } from "../../hooks";
import * as authActions from "../../actions/auth";
import * as authSelectors from "../../selectors/auth";
import Input from "../core/Input";
import Button from "../core/Button";

const StyledForm = styled.form`
  display: flex;
  min-width: 0;
`;

const StyledInput = styled(Input)`
  flex-shrink: 1;
  margin-right: ${({ theme }) => theme.size.medium};
  min-width: 0;
`;

const StyledButton = styled(Button)`
  background: ${({ theme }) => theme.color.gray};
  color: ${({ theme }) => theme.color.onBackground};
  flex-shrink: 0;
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
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput type="text" placeholder="Username" />
      <StyledInput type="password" placeholder="Password" />
      <StyledButton type="submit">Log in</StyledButton>
    </StyledForm>
  ) : (
    <></>
  );
};

export default Login;
