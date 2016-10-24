import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
// import Form, { ValidationError, TextInput } from 'react-router';
import { combineReducers, createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import ReduxPromise from "redux-promise-middleware"
import './styles/index.css';

import App from './App';
import NewGoal from './newgoal';
import Goal_page from './Goal_page';
import Group_page from './Group_page';
import store from "./store"

const createStoreWithMiddleware =  applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Goal_page}></IndexRoute>
        <Route path="new-goal" component={NewGoal}></Route>
        <Route path="group" component={Group_page}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

