import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchGoal, checkedGoal } from "./actions/goalActions"
import { fetchUser } from "./actions/userActions"

import Milestone from "./components/Milestone"

class Goal_page extends Component {


  renderGoals = (goals) => {
   return (
     <ul>
       <li> {goals[0]} </li>
     </ul>
   )
  }

  handleChange = (event) => {
    this.props.checkedGoal(1)
  }


  componentWillMount = () => {
    // this.serverRequest.abort();
    this.props.fetchGoal(1);
    this.props.fetchUser(1);
  }

  render() {
    var g = this.props.goals;
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
        <Milestone onChange={this.handleChange} milestones={g.milestones} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('ssss', state);
  return {
    user: state.user,
    goals: state.goals.goals,
    checked: state.goals.checked
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
                              fetchGoal,
                              fetchUser,
                              checkedGoal
                            }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Goal_page);
