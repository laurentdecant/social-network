import React from "react";

const Signup = () => {
  return (
    <>
      <form>
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
