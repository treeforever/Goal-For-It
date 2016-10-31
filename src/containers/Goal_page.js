import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RaisedButton, FlatButton, Dialog, Checkbox} from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';

import { addGoal, fetchGoal, checkedGoal, openAddGoalDialog, closeAddGoalDialog, handleGoalInput } from "../actions/goalActions"
import { fetchUser } from "../actions/userActions"
import { addMilestones, openAddMilestonesDialog, closeAddMilestonesDialog, handleMilestoneInput, handleMilestonesInput, addMilestoneRow} from "../actions/milestoneActions"
import { addSteps, openAddStepsDialog, closeAddStepsDialog, handleStepInput, handleStepsInput, selectMilestone, addStepRow} from "../actions/stepActions"
import { addNotif } from "../actions/groupActions"
import { moneyGoal, moneyMile, moneyStep } from "../actions/moneyActions"

import Milestone from "../components/MilestoneIndex"

import muiTheme from '../components/MuiTheme'
import MuiText from '../components/MuiText'
import Nav from './Nav'


injectTapEventPlugin();

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class Goal_page extends Component {
  handleChange = (event) => {
    this.props.checkedGoal(this.props.goal)

    const content = (this.props.goal.goal_checked ? `${this.props.user.user.username} unchecked their goal: ${this.props.goal.goal}` : `${this.props.user.user.username} completed their goal: ${this.props.goal.goal}`)

    this.props.addNotif({
      type: "notificaiton",
      content: content })

    this.props.moneyGoal(this.props.goal.goal_checked);
  }


  componentWillMount = () => {
    if(this.props.goal.goal){
      return
    }else{
      this.props.fetchGoal(1);
    }
    this.props.fetchUser(1);
  }

  render() {
    let g = this.props.goal;


    return (
      <div>
        <Nav title={`${this.props.user.currentUser.username}${'\''}s Goals`}/>

    const goalActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => { this.props.closeAddGoalDialog() }}
      />,
      <FlatButton
        label="Next"
        primary={true}
        disabled={!this.props.goalText}
        onTouchTap={() => { console.log('here'); this.nextButtonActionsOnGoal() }}
      />,
    ];


    return (
      <div>
        <MuiThemeProvider>
          <AppBar
            title={`${this.props.user.user.username}${'\''}s Goals`}
            iconClassNameLeft="muidocs-icon-navigation-expand-more"
            className="App-Bar"
          />
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={muiTheme}>
          <RaisedButton label="+" onClick={ () => this.props.openAddGoalDialog() } />
          </MuiThemeProvider>
>>>>>>> d0f0eede99a33dd29f288ee8aa7ccf96fa27f68f
        <h1>{g.goal}
          <MuiThemeProvider style={styles.block}>
            <Checkbox
            style={styles.checkbox}
            onCheck={this.handleChange}
            checked={g.goal_checked}
            disabled={(this.props.user.user.username === this.props.user.currentUser.username ? false : true)}

            />
          </MuiThemeProvider>
        </h1>
        <Milestone onChange={this.handleChange} milestones={g.milestones} user={this.props.user.user.username} currentUser={this.props.user.currentUser}/>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    goal: state.goal.goal,
    openGoalDialog: state.goal.openGoalDialog,
    openMilestonesDialog: state.milestones.openMilestonesDialog,
    openStepsDialog: state.steps.openStepsDialog,
    goalText: state.goal.goalText,
    newGoal: state.goal.newGoal,
    milestoneText: state.milestones.milestoneText,
    milestonesText: state.milestones.milestonesText,
    milestoneRows: state.milestones.milestoneRows,
    newMilestones: state.milestones.newMilestones,
    stepText: state.milestones.stepText,
    stepsText: state.steps.stepsText,
    stepRows: state.steps.stepRows,
    newSteps: state.steps.newSteps,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchGoal,
      fetchUser,
      checkedGoal,
      addNotif,

      addGoal,
      addMilestones,
      addSteps,
      openAddGoalDialog,
      openAddMilestonesDialog,
      openAddStepsDialog,
      closeAddGoalDialog,
      closeAddMilestonesDialog,
      closeAddStepsDialog,
      handleGoalInput,
      handleMilestoneInput,
      handleMilestonesInput,
      handleStepInput,
      handleStepsInput,
      addMilestoneRow,
      addStepRow,
      selectMilestone,
<<<<<<< HEAD
      moneyGoal,
=======
      moneyGoal
>>>>>>> d0f0eede99a33dd29f288ee8aa7ccf96fa27f68f
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Goal_page);

// <MuiThemeProvider>
//   <AppBar
//     title={`${this.props.user.currentUser.username}${'\''}s Goals`}
//     iconClassNameLeft="muidocs-icon-navigation-expand-more"
//     className="App-Bar"
//   />
// </MuiThemeProvider>
