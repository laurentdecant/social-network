import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import configureStore from "./store";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import App from "./components/App";

import "normalize.css";

const store = configureStore();

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
