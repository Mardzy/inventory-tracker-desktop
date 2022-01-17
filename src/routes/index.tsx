import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

import { AddToCollection, Home, Marketplace } from "pages";
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
    <Container maxWidth="xl" sx={{ paddingTop: "10vh" }}>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.marketplace} element={<Marketplace />} />
        <Route path={routes.addToCollection} element={<AddToCollection />} />
      </Routes>
    </Container>
  </>
);

export default Routing;
