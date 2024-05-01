import React from "react";

import HomePage from "../pages/HomePage";
import { Route, Switch } from "react-router-dom";
import Shop from "../pages/Shop";
import ProductDetail from "../pages/ProductDetail";

function PageContent() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/productdetail">
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default PageContent;
