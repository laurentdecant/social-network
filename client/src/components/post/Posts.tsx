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

const formatDate = (timestamp: string) => {
  const duration = moment.duration(
    moment(new Date()).diff(moment(new Date(timestamp)))
  );
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
