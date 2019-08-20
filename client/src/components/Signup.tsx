import React, { FormEvent } from "react";
import styled from "styled-components";
import { useActions } from "../hooks";
import * as authActions from "../actions/auth";
import Button from "./core/Button";
import Input from "./core/Input";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.gray};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space.large};
  border-radius: ${({ theme }) => theme.radius};
  width: 25%;
`;

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 0 0 ${({ theme }) => theme.space.large} 0;
  text-align: center;
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

const Signup = () => {
  const signup = useActions(authActions.signup);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const [username, password] = (event.target as any) as Array<
      HTMLInputElement
    >;
    signup(username.value, password.value);
  };

  return (
    <Wrapper>
      <Heading>Sign up</Heading>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Username</Label>
          <Input type="text" dimension="large" />
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input type="password" dimension="large" />
        </FormGroup>

        <Button type="submit" dimension="large" color="primary">
          Sign up
        </Button>
      </Form>
    </Wrapper>
  );
};

export default Signup;
