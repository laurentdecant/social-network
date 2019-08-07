import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const App = () => (
  <Wrapper>
    <Header />
    <Main />
    <Footer />
  </Wrapper>
);

export default App;
