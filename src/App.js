import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { populateUserInfo } from './actions/userActions';

import './styles/App.css';

class App extends Component {

  componentWillMount() {
    this.props.populateUserInfo();
  }

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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    populateUserInfo,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
