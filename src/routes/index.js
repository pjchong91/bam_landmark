import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "./../pages/Home";
import NavBar from "./../components/NavBar";

export default () => (
  <React.Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" name="/home" component={Home} />
      <Redirect from="*" to="/" />
    </Switch>
  </React.Fragment>
);
