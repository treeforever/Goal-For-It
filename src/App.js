import React, { Component } from 'react';
import { connect } from "react-redux"

import './styles/App.css';
import Sidemenu from './Sidemenu'

class App extends Component {
  componentWillMount() {

  }

  render() {

    return (
      <div className="App">
        <nav>
          <Sidemenu />
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
