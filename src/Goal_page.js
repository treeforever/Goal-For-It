import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchGoal, checkedGoal } from "./actions/goalActions"
import { fetchUser } from "./actions/userActions"
import { addNotif } from "./actions/groupActions"

import Milestone from "./components/MilestoneRender"

class Goal_page extends Component {


  renderGoals = (goals) => {
   return (
     <ul>
       <li> {goals[0]} </li>
     </ul>
   )
  }

  handleChange = (event) => {
    this.props.checkedGoal(this.props.goal.goal_id, this.props.checked)

    const content = (this.props.goal.goal.checked ? `${this.props.user.user.username} unchecked their goal: ${this.props.goal.goal}` : `${this.props.user.user.username} completed their goal: ${this.props.goal.goal}`)

    this.props.addNotif({
      type: "notificaiton",
      content: content })
  }


  componentWillMount = () => {
    // this.serverRequest.abort();
    this.props.fetchGoal(2);
    this.props.fetchUser(1);
  }

  render() {
    var g = this.props.goal;
    return (
      <div>
        <h2>{this.props.user.user.username}s Goals</h2>
        <h1>{g.goal}
          <input
            className="checkbox"
            type="checkbox"
            onChange={this.handleChange}
            value={this.props.checked}
          />
        </h1>
        <Milestone onChange={this.handleChange} milestones={g.milestones} user={this.props.user.user.username}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    goal: state.goal.goal,
    checked: state.goal.checked
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
                              fetchGoal,
                              fetchUser,
                              checkedGoal,
                              addNotif
                            }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Goal_page);
