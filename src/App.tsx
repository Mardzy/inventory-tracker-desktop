import React from "react";
import { hot } from "react-hot-loader";
import { CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

import "styles/index.scss";

import Routing from "routes";
import { ScrollToTop } from "components";

const App: React.FC = () => (
  <StyledEngineProvider injectFirst>
    <div id="back-to-top-anchor" />
    <CssBaseline />
    <Routing />
    <ScrollToTop />
  </StyledEngineProvider>
);

export default hot(module)(App);
