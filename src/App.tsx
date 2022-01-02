import React from "react";
import { hot } from "react-hot-loader";

import "assets/styles/index.scss";

import Routes from "pages/routes";
import { Header } from "components";

const App: React.FC = () => (
  <>
    <Header />
    <Routes />
  </>
);

export default hot(module)(App);
