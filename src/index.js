import React from 'react';
import ReactDOM from 'react-dom';

import { createBrowserHistory } from 'history'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Houses from './pages/Houses'

export const history = createBrowserHistory()

ReactDOM.render(
  <BrowserRouter history={history}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/houses" component={Houses} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
