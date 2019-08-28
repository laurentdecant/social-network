import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
  html {
    background: ${theme.color.background};
    color: ${theme.color.onBackground};
    font-size: ${theme.size.medium};
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a,
  a:hover,
  a:active,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;
