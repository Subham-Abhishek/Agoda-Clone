import React from "react";
import { Route, Switch } from "react-router-dom";
import { LandingPage } from "../Pages/LandingPage/LandingPage";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
    </Switch>
  );
};
