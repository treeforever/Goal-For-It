import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Milestone from './Milestone';
import Sidemenu from './Sidemenu'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Sidebar />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>GOAL FOR IT!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
