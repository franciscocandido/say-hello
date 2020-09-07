import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Home from './Pages/Home';

import './main.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/hello" component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
