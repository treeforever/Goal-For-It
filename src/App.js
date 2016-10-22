import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Sidemenu from './Sidemenu'


class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>GOAL FOR IT!</h2>
        </div>
        <nav>
          <Sidemenu />
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
