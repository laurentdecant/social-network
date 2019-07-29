import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";

const App = () => (
  <Router>
    <Header />
    <Main />
  </Router>
);

export default App;
