import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

import {
  AddToCollection,
  Collection,
  CollectionItem,
  Home,
  Marketplace,
} from "pages";
import { Header } from "components";

export const routes = {
  home: { to: "/", title: "Home" },
  addToCollection: { to: "/addToCollection", title: "Add to Collection" },
  collection: { to: "/collection", title: "View Collection" },
  collectionItem: { to: "/collection/:id", title: "View Item" },
  marketplace: { to: "/marketplace", title: "View Marketplace" },
};

const Routing = () => (
  <>
    <Header />
    <Container maxWidth="xl" sx={{ paddingTop: "3vh" }}>
      <Routes>
        <Route path={routes.addToCollection.to} element={<AddToCollection />} />
        <Route path={routes.collection.to} element={<Collection />} />
        <Route path={routes.collectionItem.to} element={<CollectionItem />} />
        <Route path={routes.home.to} element={<Home />} />
        <Route path={routes.marketplace.to} element={<Marketplace />} />
      </Routes>
    </Container>
  </>
);

export default Routing;
