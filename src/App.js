import React, { Component } from 'react';
import { connect } from "react-redux"

import './styles/App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <nav>

        </nav>
        <div className="container">
          <h1>{this.props.user.name}</h1>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    goals: state.goals

  }
}


export default connect(mapStateToProps)(App)
