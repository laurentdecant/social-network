import React, { useCallback, FormEvent } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import * as authActions from "../actions/auth";
import Button from "./Button";
import Heading from "./Heading";
import Input from "./Input";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.gray};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space.large};
  border-radius: ${({ theme }) => theme.radius};
  width: 25%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.space.medium};

  &:last-of-type {
    margin-bottom: ${({ theme }) => theme.space.large};
  }
`;

const Label = styled.label`
  margin-bottom: ${({ theme }) => theme.space.small};
  padding-left: ${({ theme }) => theme.space.small};
`;

const SubmitButton = styled(Button)`
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.background.default};
`;

const Signup = () => {
  const dispatch = useDispatch();
  const dispatchSignup = useCallback(
    (username, password) => dispatch(authActions.signup(username, password)),
    [dispatch]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const [username, password] = (event.target as any) as Array<
      HTMLInputElement
    >;
    dispatchSignup(username.value, password.value);
  };

  return (
    <Wrapper>
      <Heading>Sign Up</Heading>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Username</Label>
          <Input type="text" />
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input type="password" />
        </FormGroup>

        <SubmitButton type="submit">Sign Up</SubmitButton>
      </Form>
    </Wrapper>
  );
};

export default Signup;
