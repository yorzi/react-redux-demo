import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";

import Home from "./components/pages/HomePage";
import NotFound from "./components/pages/NotFound";
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import Dashboard from './components/pages/Dashboard';

// build the router
const router = (
  <Router history={history}>
    <Route component={App}>
      <Route path="/" component={HomePage} />
      <Route onEnter={checkAuth}>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/dashboard" component={Dashboard} />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

// export
export { router };
