import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useActions } from "../../hooks";
import * as userActions from "../../actions/user";
import * as userSelectors from "../../selectors/user";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.gray};
  height: 100%;
  margin: 0 auto;
  width: 50%;
`;

const Users = () => {
  const getUsers = useActions(userActions.getUsers);
  const users = useSelector(userSelectors.getUsers);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <Wrapper>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Users;
