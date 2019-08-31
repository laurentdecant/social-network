import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks";
import * as postSelectors from "../../selectors/post";
import * as postActions from "../../actions/post";
import Icon from "../core/Icon";
import Create from "./Create";

const Wrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  width: 50%;
`;

const Item = styled.li`
  background: ${({ theme }) => theme.color.gray};
  border-radius: ${({ theme }) => theme.radius};
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.size.medium};

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.size.medium};
  }
`;

const Row = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
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
  font-size: ${({ theme }) => theme.size.mediumLarge};
  padding: 0 ${({ theme }) => theme.size.small};
`;

const formatDate = (timestamp: string) => {
  const date = new Date(timestamp);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

const Posts = () => {
  const getPosts = useActions(postActions.getPosts);
  const posts = useSelector(postSelectors.getPosts);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Wrapper>
      <Create />

      <ul>
        {posts.map(post => (
          <Item key={post._id}>
            <Row>
              <Avatar type="person" />
              <Column>
                <Author>{post.author.username}</Author>
                <Timestamp>{formatDate(post.timestamp)}</Timestamp>
              </Column>
            </Row>
            <Message>{post.message}</Message>
          </Item>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Posts;
