import React from "react";

import HomePage from "../pages/HomePage";
import { Route, Switch } from "react-router-dom";
import Shop from "../pages/Shop";
import ProductDetail from "../pages/ProductDetail";
import ContactPage from "../pages/ContactPage";
import AboutUs from "../pages/AboutUs";
import Team from "../pages/Team";
import SignUp from "../pages/SignUp";

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
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/about">
          <AboutUs />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default PageContent;
