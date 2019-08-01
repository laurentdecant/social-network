import React, { useCallback, FormEvent } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";

const Header = () => {
  const dispatch = useDispatch();
  const dispatchLogin = useCallback(
    (username, password) => dispatch(login(username, password)),
    [dispatch]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const [username, password] = (event.target as any) as Array<
      HTMLInputElement
    >;
    dispatchLogin(username.value, password.value);
  };

  return (
    <header>
      <span>Social Network</span>

      <nav>
        <Link to="/">Home</Link>
      </nav>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Log In</button>
      </form>
    </header>
  );
};

export default Header;
