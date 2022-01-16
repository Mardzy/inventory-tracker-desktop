import React from "react";
import { hot } from "react-hot-loader";
import { CssBaseline } from "@mui/material";

import "styles/index.scss";

import Routing from "routes";

const App: React.FC = () => (
  <>
    <CssBaseline />
    <Routing />
  </>
);

export default hot(module)(App);
