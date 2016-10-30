import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchGoal, checkedGoal } from "./actions/goalActions"
import { fetchUser } from "./actions/userActions"
import { addNotif } from "./actions/groupActions"

import Milestone from "./components/MilestoneIndex"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Checkbox from 'material-ui/Checkbox';


const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class Goal_page extends Component {


  renderGoals = (goals) => {
   return (
     <ul>
       <li> {goals[0]} </li>
     </ul>
   )
  }

  handleChange = (event) => {
     this.props.checkedGoal(this.props.goal)

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
    console.log("render", this.props.goal.checked)
    var g = this.props.goal;
    return (
      <div>
        <h2>{this.props.user.user.username}s Goals</h2>
        <h1>{g.goal}
          <MuiThemeProvider style={styles.block}>
              <Checkbox
              style={styles.checkbox}
              onCheck={this.handleChange}
              checked={this.props.goal.checked}
              />
            </MuiThemeProvider>
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
