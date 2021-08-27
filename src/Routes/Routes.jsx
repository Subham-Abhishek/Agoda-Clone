import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { AppContext } from "../context/Provider";
import { LandingPage } from "../Pages/LandingPage/LandingPage";
import { Milind } from "../Pages/Milind Page/Milind";

export const Routes = () => {
  let {searchedCity, setSearchedCity} = useContext(AppContext)
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/milind">
        <Milind searchedCity={searchedCity} />
      </Route>
    </Switch>
  );
};
