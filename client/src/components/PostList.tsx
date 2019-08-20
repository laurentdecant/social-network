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
  padding: ${({ theme }) => theme.space.medium};

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space.medium};
  }
`;

const StyledIcon = styled(Icon)`
  margin-right: ${({ theme }) => theme.space.medium};
`;

const Message = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.space.large};
  flex-grow: 1;
  line-height: ${({ theme }) => theme.space.large};
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
            <Message>{post.message}</Message>
          </Item>
        ))}
    </List>
  );
};

export default Home;
