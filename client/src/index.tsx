import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import rootReducer from "./reducers";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import App from "./components/App";

import "normalize.css";

const store = createStore(rootReducer);

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
