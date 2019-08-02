import React, { useCallback, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../actions/auth";

const Signup = () => {
  const dispatch = useDispatch();
  const dispatchSignup = useCallback(
    (username, password) => dispatch(signup({ username, password })),
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
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default Signup;
