import React from "react";
import styled from "styled-components";
import * as postSelectors from "../selectors/post";
import { useSelector } from "react-redux";
import Icon from "./core/Icon";

const List = styled.ul``;

const Item = styled.li`
  align-items: center;
  background: ${({ theme }) => theme.color.gray};
  border-radius: ${({ theme }) => theme.radius};
  display: flex;
  padding: ${({ theme }) => theme.size.medium};

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.size.medium};
  }
`;

const StyledIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.size.extraLarge};
  margin-right: ${({ theme }) => theme.size.medium};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Author = styled.div`
  margin-bottom: ${({ theme }) => theme.size.small};
`;

const Message = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.size.large};
  flex-grow: 1;
  line-height: ${({ theme }) => theme.size.large};
  padding: 0 16px;
`;

const Home = () => {
  const posts = useSelector(postSelectors.getPosts);

  return (
    <List>
      {posts &&
        posts.map(post => (
          <Item key={post._id}>
            <StyledIcon type="person" />
            <Column>
              <Author>{post.author.username}</Author>
              <Message>{post.message}</Message>
            </Column>
          </Item>
        ))}
    </List>
  );
};

export default Home;
