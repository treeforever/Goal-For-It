import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Milestone from './Milestone';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>GOAL FOR IT!</h2>
        </div>

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
