import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from './../pages/Home';
import NavBar from './../components/NavBar';
import { MenuContext } from '../context/MenuContext';
import Menu from './../pages/Menu';

export default () => (
  <MenuContext.Consumer>
    {values => {
      return (
        <React.Fragment>
          <NavBar value={values} />
          {values.menuToggled ? (
            <Menu />
          ) : (
            <Switch>
              <Route exact path="/" name="/home" component={Home} />
              <Redirect from="*" to="/" />
            </Switch>
          )}
        </React.Fragment>
      );
    }}
  </MenuContext.Consumer>
);
