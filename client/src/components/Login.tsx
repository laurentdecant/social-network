import React, { useCallback, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import * as authActions from "../actions/auth";
import * as authSelectors from "../selectors/auth";
import Button from "./Button";
import Input from "./Input";

const StyledInput = styled(Input)`
  margin-right: ${({ theme }) => theme.space.sm};
`;

const Login = () => {
  const dispatch = useDispatch();
  const dispatchLogin = useCallback(
    (username, password) => dispatch(authActions.login(username, password)),
    [dispatch]
  );
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const [username, password] = (event.target as any) as Array<
      HTMLInputElement
    >;
    dispatchLogin(username.value, password.value);
  };

  return !isLoggedIn ? (
    <form onSubmit={handleSubmit}>
      <StyledInput type="text" placeholder="Username" />
      <StyledInput type="password" placeholder="Password" />
      <Button type="submit">Log In</Button>
    </form>
  ) : (
    <></>
  );
};

export default Login;
