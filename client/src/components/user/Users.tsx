import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useActions } from "../../hooks";
import * as userActions from "../../actions/user";
import * as userSelectors from "../../selectors/user";
import User from "./User";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.gray};
  border-radius: ${({ theme }) => theme.radius};
  height: 100%;
  margin: 0 auto;
  width: 50%;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.li`
  box-sizing: border-box;
  padding: ${({ theme }) => theme.size.medium};
  width: calc(100% / 3);
`;

const Users = () => {
  const getUsers = useActions(userActions.getUsers);
  const users = useSelector(userSelectors.getUsers);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <Wrapper>
      <List>
        {users.map(user => (
          <Item key={user.id}>
            <User user={user} />
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default Users;
