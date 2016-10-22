// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute, hashHistory } from "react-router";
// import './styles/index.css';
//
// import App from './App';
// import Goal_page from './Goal_page';
// import Group_page from './Group_page';
// import NewGoal from './newgoal';
//
//
//
//
// ReactDOM.render(
//   <Router history={hashHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Goal_page}></IndexRoute>
//       <Route path="new-goal" component={NewGoal}></Route>
//       <Route path="group" component={Group_page}></Route>
//     </Route>
//   </Router>,
//   document.getElementById('root')
// );

import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";
import promise from "redux-promise-middleware"


const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  users:[],
  goals:[]
};

const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_START": {
      return {...state, fetching: true}
      break;
    }
    case "RECEIVE_USERS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      }
      break;
    }
    case "FETCH_USERS_ERROR": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
      break;
    }
  }
  return state
}

// const goalReducer = (state={}, action) => {
//   switch (action.type) {
//     case "FETCH_GOALS_START": {
//       return {...state, fetching: true}
//       break;
//     }
//   }
// }

const reducers = combineReducers({
  user: userReducer
  // goal: goalReducer
})

const middleware = applyMiddleware(promise(), thunk, logger());

const store = createStore(reducers, middleware);


store.subscribe(() => {
  console.log("store changed", store.getState())
})

store.dispatch({
  type: "FETCH_USERS_START",
  payload: axios.get("http://rest.learncode.academy/api/wstern/users")
})
