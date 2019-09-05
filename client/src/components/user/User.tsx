import React from "react";
import styled from "styled-components";
import moment from "moment";
import User from "../../types/User";
import { useActions } from "../../hooks";
import * as followerActions from "../../actions/follower";
import Icon from "../core/Icon";
import Button from "../core/Button";

const Row = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.color.gray};
  border-radius: ${({ theme }) => theme.radius};
  display: flex;
  margin: ${({ theme }) => theme.size.small};
  padding: ${({ theme }) => theme.size.medium};
`;

const Avatar = styled(Icon)`
  align-items: center;
  background: ${({ theme }) => theme.color.darkGray};
  border-radius: 50%;
  display: flex;
  flex-shrink: 0;
  font-size: ${({ theme }) => theme.size.largeExtraLarge};
  height: ${({ theme }) => theme.size.extraLarge};
  justify-content: center;
  margin-right: ${({ theme }) => theme.size.medium};
  width: ${({ theme }) => theme.size.extraLarge};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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
  const [followUser, unfollowUser] = useActions([
    followerActions.followUser,
    followerActions.unfollowUser
  ]);

  const handleClick = () => {
    if (user.isFollowed) {
      unfollowUser(user.id);
    } else {
      followUser(user.id);
    }
  };

  return (
    <Row>
      <Avatar type="person" />
      <Column>
        <Username>{user.username}</Username>
        <Timestamp>{format(user.timestamp)}</Timestamp>
      </Column>
      <Button color="primary" onClick={handleClick}>
        {user.isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </Row>
  );
};

export default User;
