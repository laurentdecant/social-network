import React, { FormEvent, useEffect } from "react";
import styled from "styled-components";
import { useActions } from "../hooks";
import * as postActions from "../actions/post";
import Button from "./core/Button";
import Input from "./core/Input";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.gray};
  border-radius: ${({ theme }) => theme.radius};
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space.large};
  width: 50%;
`;

const Form = styled.form`
  display: flex;
`;

const StyledInput = styled(Input)`
  flex-grow: 1;
`;

const Home = () => {
  const getPosts = useActions(postActions.getPosts);
  getPosts();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <StyledInput dimension="large" />
        <Button dimension="large" color="primary">
          Post
        </Button>
      </Form>
    </Wrapper>
  );
};

export default Home;
