import React from "react";
import styled from "styled-components";
import moment from "moment";
import User from "../../types/User";
import Icon from "../core/Icon";
import Button from "../core/Button";

const Row = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: ${({ theme }) => theme.size.medium};
`;

const Avatar = styled(Icon)`
  align-items: center;
  background: ${({ theme }) => theme.color.darkGray};
  border-radius: 50%;
  display: flex;
  font-size: ${({ theme }) => theme.size.largeExtraLarge};
  height: ${({ theme }) => theme.size.extraLarge};
  justify-content: center;
  margin-right: ${({ theme }) => theme.size.medium};
  width: ${({ theme }) => theme.size.extraLarge};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${({ theme }) => theme.size.medium};
`;

const Username = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.size.small};
`;

const Timestamp = styled.div`
  color: ${({ theme }) => theme.color.darkGray};
`;

const format = (timestamp: string) => {
  return moment(timestamp).format("MMMM YYYY");
};

interface Props {
  user: User;
}

const User = ({ user }: Props) => {
  return (
    <Row>
      <Avatar type="person" />
      <Column>
        <Username>{user.username}</Username>
        <Timestamp>{format(user.timestamp)}</Timestamp>
      </Column>
      <Button color="primary">Follow</Button>
    </Row>
  );
};

export default User;
