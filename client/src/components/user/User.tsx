import React from "react";
import styled from "styled-components";
import moment from "moment";
import User from "../../types/User";
import { useActions } from "../../hooks";
import * as followerActions from "../../actions/follower";
import Button from "../core/Button";
import Avatar from "../Avatar";

const Row = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.color.gray};
  border-radius: ${({ theme }) => theme.radius};
  display: flex;
  margin: ${({ theme }) => theme.size.small};
  padding: ${({ theme }) => theme.size.medium};
`;

const StyledAvatar = styled(Avatar)`
  margin-right: ${({ theme }) => theme.size.medium};
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
      <StyledAvatar {...user} />
      <Column>
        <Username>{user.username}</Username>
        <Timestamp>{format(user.timestamp)}</Timestamp>
      </Column>
      <Button onClick={handleClick}>
        {user.isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </Row>
  );
};

export default User;
