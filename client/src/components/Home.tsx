import React from "react";
import styled from "styled-components";
import PostForm from "./PostForm";
import PostList from "./PostList";

const Wrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  width: 50%;
`;

const Home = () => {
  return (
    <Wrapper>
      <PostForm />
      <PostList />
    </Wrapper>
  );
};

export default Home;
