import React from "react";
import styled from "styled-components";
import Button from "./core/Button";
import Input from "./core/Input";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.gray}
  margin: 0 auto;
  height: 100%;
  width: 50%;
`;

const Form = styled.form`
  display: flex;
`;

const StyledInput = styled(Input)`
  flex-grow: 1;
`;

const Home = () => (
  <Wrapper>
    <Form>
      <StyledInput />
      <Button color="primary">Post</Button>
    </Form>
  </Wrapper>
);

export default Home;
