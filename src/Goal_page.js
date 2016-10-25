import React, { Component } from 'react';
import { connect } from 'react-redux'
import $ from 'jquery';

import { fetchGoal } from "./actions/goalActions"
import { fetchUser } from "./actions/userActions"

import _ from 'underscore';


class Goal_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: {
        title: '',
        milestones: []
      },
      source: "http://localhost:8080/api/goals"
    }
  }

  renderGoals = (goals) => {
   return (
     <ul>
       <li> {goals[0]} </li>
     </ul>
   )
  }


  componentWillMount() {
    // this.serverRequest.abort();
    // this.props.fetchGoal();
    this.props.fetchUser(1);
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
        <h2>{this.props.user.user.username}'s Goals</h2>
        <h3>Showing all my goals: {this.renderGoals(this.props.goals.goals)} </h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    goals: state.goals
  }
}

export default connect(mapStateToProps, { fetchGoal, fetchUser })(Goal_page);
