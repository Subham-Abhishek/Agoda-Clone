import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Components/Booking/Dashboard";
import { AppContext } from "../context/Provider";
import { LandingPage } from "../Pages/LandingPage/LandingPage";
import { Map } from "../Components/Map/Map";
import { Select } from "../Components/Select/Select";
import { Login } from "../Components/Authorization/Login";
import { Register } from "../Components/Authorization/Register";
import { CheckoutPage } from "../Components/CheckoutPage/CheckoutPage";
import { BookingHistory } from "../Components/BookingHistory/BookingHistory";

export const Routes = () => {
  let { searchedCity } = useContext(AppContext);
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route exact path="/hotel">
        {/* <Milind searchedCity={searchedCity} /> */}
        <Dashboard searchedCity={searchedCity} />
      </Route>
      <Route path="/hotel/:id">
        <Select />
      </Route>
      {/* <Route exact path="/avinash">
        <Select />
      </Route> */}
      <Route exact path="/map">
        <Map />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/checkout">
        <CheckoutPage />
      </Route>
      <Route path="/bookings">
        <BookingHistory />
      </Route>
    </Switch>
  );
};
