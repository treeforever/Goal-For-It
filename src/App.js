import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Sidemenu from './Sidemenu'





class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
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
