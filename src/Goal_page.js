import React, { Component } from 'react';
import Milestone from './Milestone';



class Goal_page extends Component {
  constructor() {
    super()
    this.state = {goals: []}
  }
  componentDidMount() {
    var data = [
      {goal_id: 1, goal: "win nobel prize"},
      {goal_id: 2, goal: "eat 100 hot dogs"}
    ]
    this.setState({goals: data})
  }
  render() {
    return (
      <div>
        { this.state.goals.map( (goal) => { return <Milestone key={goal.goal_id} Data={goal.goal} /> }) }
      </div>
    );
  }
}

export default Goal_page;
