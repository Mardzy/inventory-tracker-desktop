import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

import { Home, Marketplace } from "pages";
import { Header } from "components";

export const routes = {
  home: "/",
  addToCollection: "/addToCollection",
  collection: "/collection",
  marketplace: "/marketplace",
};

const Routing = () => (
  <>
    <Header />
    <Container maxWidth="xl">
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.marketplace} element={<Marketplace />} />
      </Routes>
    </Container>
  </>
);

export default Routing;
