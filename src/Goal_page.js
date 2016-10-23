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

  renderGoals = (goals) => {
    return (
      <ul>
        {goals.map((goal, index) => {
        return <li>{index + 1}. {goal.goal} </li>
      })}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <h1></h1>
        <h2>Milestones</h2>
        <h3>Showing all my goals: {this.renderGoals(this.props.goals.goals)} </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    goals: state.goals
  }
}

export default connect(mapStateToProps, { fetchGoal })(Goal_page);
