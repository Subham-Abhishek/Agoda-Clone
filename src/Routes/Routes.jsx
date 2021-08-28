import React from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "../Components/Authorization/Login";
import { Register } from "../Components/Authorization/Register";
import { CheckoutPage } from "../Components/CheckoutPage/CheckoutPage";

export const Routes = () => {
  return (
    <Switch>
      
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/checkout">
        <CheckoutPage />
      </Route>
    </Switch>
  );
};
