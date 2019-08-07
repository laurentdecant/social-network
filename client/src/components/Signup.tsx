import React, { useCallback, FormEvent } from "react";
import { useDispatch } from "react-redux";
import * as authActions from "../actions/auth";
import Button from "./Button";
import Input from "./Input";

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
    <>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <Input type="text" />
        <label>Password</label>
        <Input type="password" />
        <Button type="submit">Sign Up</Button>
      </form>
    </>
  );
};

export default Signup;
