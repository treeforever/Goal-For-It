import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import './styles/index.css';

import App from './App';
import Goal_page from './Goal_page';
import Group_page from './Group_page';
import NewGoal from './newgoal';




ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Goal_page}></IndexRoute>
      <Route path="new-goal" component={NewGoal}></Route>
      <Route path="group" component={Group_page}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
