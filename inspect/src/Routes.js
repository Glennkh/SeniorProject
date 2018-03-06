import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

////////////////////////////////////////////////////////////
// first our route components
import {Login} from './Login.js';

////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: "/Login",
    component: {Login}
  }

];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);
