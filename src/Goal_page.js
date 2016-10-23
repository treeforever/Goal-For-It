import React, { Component } from 'react';
import { connect } from 'react-redux'
import $ from 'jquery';

import { fetchGoal } from "./actions/goalActions"
import Milestone from './Milestone';


class Goal_page extends Component {
  componentWillMount() {
    // this.serverRequest.abort();
    this.props.fetchGoal();
  }


  render() {
    return (
      <div>
        <h1>Just Goal 1 {this.props.goals.goal}</h1>
        <h2>Just Goal 1's milestone</h2>
        <h3>Redux doesn't like it{this.props.goalArray} </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    goals: state.goals.goals,
    goalArray: state.goals.goalArray
  }
}

export default connect(mapStateToProps, { fetchGoal })(Goal_page);
