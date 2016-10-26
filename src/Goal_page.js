import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchGoal } from "./actions/goalActions"
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


  componentWillMount() {
    // this.serverRequest.abort();
    this.props.fetchGoal();
    this.props.fetchUser(1);
  }

  render() {
    var g = this.props.goals;
    return (
      <div>
        <h2>{this.props.user.user.username}s Goals</h2>
        <h1>{g.goal}</h1>
        <Milestone milestones={g.milestones} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('ssss', state);
  return {
    user: state.user,
    goals: state.goals.goals
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
                              fetchGoal,
                              fetchUser
                            }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Goal_page);
