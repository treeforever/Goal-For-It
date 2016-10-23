import React, { Component } from 'react';
import { connect } from "react-redux"

import './styles/App.css';
import Sidemenu from './Sidemenu'
import { fetchUser } from "./actions/userActions"

class App extends Component {
  componentWillMount() {
    this.props.fetchUser()
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
    user: state.user.user
  }
}

export default connect(mapStateToProps, {
  fetchUser
})(App)
