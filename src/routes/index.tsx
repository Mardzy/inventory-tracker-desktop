import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

import { AddToCollection, Collection, Home, Marketplace } from "pages";
import { Header } from "components";

export const routes = {
  home: { to: "/", title: "Home" },
  addToCollection: { to: "/addToCollection", title: "Add to Collection" },
  collection: { to: "/collection", title: "View Collection" },
  marketplace: { to: "/marketplace", title: "View Marketplace" },
};

const Routing = () => (
  <>
    <Header />
    <Container maxWidth="xl" sx={{ paddingTop: "10vh" }}>
      <Routes>
        <Route path={routes.addToCollection.to} element={<AddToCollection />} />
        <Route path={routes.collection.to} element={<Collection />} />
        <Route path={routes.home.to} element={<Home />} />
        <Route path={routes.marketplace.to} element={<Marketplace />} />
      </Routes>
    </Container>
  </>
);

export default Routing;
