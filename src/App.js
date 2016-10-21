import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Milestone from './Milestone';
import Sidemenu from './Sidemenu'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>GOAL FOR IT!</h2>
        </div>
        <nav>
          <Sidemenu />
        </nav>
        <div>
          <Milestone />
          <Milestone />
          <Milestone />
          <Milestone />
        </div>
      </div>
    );
  }
}

export default App;
