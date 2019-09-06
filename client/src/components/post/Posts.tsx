import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import moment from "moment";
import { useActions } from "../../hooks";
import * as postSelectors from "../../selectors/post";
import * as postActions from "../../actions/post";
import Create from "./Create";
import Post from "./Post";

const Wrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  width: 25%;
`;

const Item = styled.li`
  background: ${({ theme }) => theme.color.gray};
  border-radius: ${({ theme }) => theme.radius};
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.size.medium};
  }
`;

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
          <Item key={post.id}>
            <Post post={post} />
          </Item>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Posts;
