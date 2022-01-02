import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import Home from "pages/home";

const Routes = () => (
  <Switch>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/about">
      <h1>About page</h1>
    </Route>
  </Switch>
);

export default Routes;
