import React from "react";
import styled from "styled-components";
import moment from "moment";
import Post from "../../types/Post";
import Icon from "../core/Icon";

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
  flex-grow: 1;
`;

const Author = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.size.small};
`;

const Timestamp = styled.div`
  color: ${({ theme }) => theme.color.darkGray};
`;

const Message = styled.div`
  padding: 0 ${({ theme }) => theme.size.small};
`;

const format = (timestamp: string) => {
  const duration = moment.duration(moment().diff(moment(timestamp)));
  if (duration.years() < 1) {
    if (duration.months() < 1) {
      if (duration.days() < 1) {
        if (duration.hours() < 1) {
          if (duration.minutes() < 1) {
            return `${duration.seconds()}s`;
          }
          return `${duration.minutes()}m`;
        }
        return `${duration.hours()}h`;
      }
      return `${duration.days()}d`;
    }
    return `${duration.months()}m`;
  }
  return `${duration.years()}y`;
};

interface Props {
  post: Post;
}

const Post = ({ post }: Props) => {
  return (
    <Column>
      <Row>
        <Avatar type="person" />
        <Column>
          <Author>{post.author.username}</Author>
          <Timestamp>{format(post.timestamp)}</Timestamp>
        </Column>
      </Row>
      <Message>{post.message}</Message>
    </Column>
  );
};

export default Post;
