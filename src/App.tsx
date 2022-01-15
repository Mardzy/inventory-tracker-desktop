import React from "react";
import { hot } from "react-hot-loader";
import { CssBaseline } from "@mui/material";

import "styles/index.scss";

import Routes from "pages/routes";
import { Header } from "components";

const App: React.FC = () => (
  <>
    <CssBaseline />
    <Header />
    <Routes />
  </>
);

export default hot(module)(App);
