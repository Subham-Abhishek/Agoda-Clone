import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Components/Booking/Dashboard";
import FilterBox from "../Components/Booking/FilterBox";
// import Navbar from './Navbar';

const Routing = () => {
  return (
    <div>
      {/* <Navbar/> */}

      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>

        <Route path="/hotel/:id">
          <FilterBox />
        </Route>
      </Switch>
    </div>
  );
};

export default Routing;
