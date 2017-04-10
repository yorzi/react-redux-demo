import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/app";

import NotFound from "./components/pages/not_found";
import HomePage from './components/pages/home_page';
import LoginPage from './components/pages/login_page';
import RegisterPage from './components/pages/register_page';
// import Dashboard from './components/pages/Dashboard';

// build the router
const router = (
  <Router history={history}>
    <Route component={App}>
      <Route path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

// export
export { router };
