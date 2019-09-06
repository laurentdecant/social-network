import React from "react";
import styled from "styled-components";
import moment from "moment";
import Post from "../../types/Post";
import Icon from "../core/Icon";
import RoundButton from "../core/RoundButton";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  align-items: center;
  display: flex;
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

const Meta = styled(Row)`
  margin-bottom: ${({ theme }) => theme.size.small};
`;

const Author = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-right: ${({ theme }) => theme.size.small};
`;

const Timestamp = styled.div`
  color: ${({ theme }) => theme.color.darkGray};
`;

const Message = styled.div`
  margin-bottom: ${({ theme }) => theme.size.small};
`;

const Actions = styled.div`
  display: flex;
`;

const format = (timestamp: string) => {
  return moment(timestamp).format("MMM D");
};

interface Props {
  post: Post;
}

const Post = ({ post }: Props) => {
  return (
    <Row>
      <Avatar type="person" />
      <Column>
        <Meta>
          <Author>{post.author.username}</Author>
          <Timestamp>{format(post.timestamp)}</Timestamp>
        </Meta>
        <Message>{post.message}</Message>
        <Actions>
          <RoundButton>
            <Icon type="person" />
          </RoundButton>
          <RoundButton>
            <Icon type="person" />
          </RoundButton>
          <RoundButton>
            <Icon type="person" />
          </RoundButton>
        </Actions>
      </Column>
    </Row>
  );
};

export default Post;
