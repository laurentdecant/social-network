import React, { FormEvent, useEffect } from "react";
import styled from "styled-components";
import { useActions } from "../hooks";
import * as postActions from "../actions/post";
import Button from "./core/Button";
import Input from "./core/Input";

const Form = styled.form`
  background: ${({ theme }) => theme.color.gray};
  border-radius: ${({ theme }) => theme.radius};
  display: flex;
  margin-bottom: ${({ theme }) => theme.size.medium};
  padding: ${({ theme }) => theme.size.medium};
`;

const StyledInput = styled(Input)`
  border-right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  flex-grow: 1;
`;

const StyledButton = styled(Button)`
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
`;

const PostForm = () => {
  const [getPosts, postPost] = useActions([
    postActions.getPosts,
    postActions.postPost
  ]);

  useEffect(() => {
    getPosts();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const [message] = (event.target as any) as Array<HTMLInputElement>;
    postPost(message.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledInput placeholder="Message" />
      <StyledButton color="primary" type="submit">
        Post
      </StyledButton>
    </Form>
  );
};

export default PostForm;
