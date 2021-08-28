import { Link, Switch, Route } from "react-router-dom";
import React from "react"
import { Map } from "../Components/Map/Map";
import { Select } from "../Components/Select/Select";

function Routes() {
    return <>
        <Switch>
            <Route exact path="/">
                <Select />
            </Route>
            <Route exact path="/map">
                <Map/>
            </Route>
        </Switch>
    </>
}
 
export { Routes}