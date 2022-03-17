import React, { FC } from "react";
import { hot } from "react-hot-loader";
import { CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

import "@styles";

import Routes from "@routes";

import { ScrollToTop } from "@components";

const App: FC = () => (
  <StyledEngineProvider injectFirst>
    <div id="back-to-top-anchor" />
    <CssBaseline />
    <Routes />
    <ScrollToTop />
  </StyledEngineProvider>
);

export default hot(module)(App);
