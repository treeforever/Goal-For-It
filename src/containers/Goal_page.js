import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addGoal, fetchGoal, checkedGoal, openAddGoalDialog, closeAddGoalDialog, handleGoalInput } from "../actions/goalActions"
import { fetchUser } from "../actions/userActions"
import { addMilestones, openAddMilestonesDialog, closeAddMilestonesDialog, handleMilestonesInput} from "../actions/milestoneActions"
import { addSteps, openAddStepsDialog, closeAddStepsDialog, handleStepsInput} from "../actions/stepActions"
import { addNotif } from "../actions/groupActions"


import Milestone from "../components/MilestoneIndex"
import Form1 from "./Form1"
import { RaisedButton, FlatButton, Dialog } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from '../components/MuiTheme'
import MuiText from '../components/MuiText'


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
    this.props.fetchGoal(2);
    this.props.fetchUser(1);
  }

  nextButtonActionsOnGoal = () => {
    this.props.addGoal(this.props.goalText)
    this.props.closeAddGoalDialog()
    this.props.openAddMilestonesDialog()
  }

  nextButtonActionsOnMilestones = () => {
    this.props.addMilestones(this.props.milestonesText)
    this.props.closeAddMilestonesDialog()
    this.props.openAddStepsDialog()
  }

  nextButtonActionsOnSteps = () => {
    this.props.addSteps(this.props.stepsText)
    this.props.closeAddStepsDialog()
  }

  render() {
    var g = this.props.goal;
    const modalActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => { this.props.closeAddGoalDialog() }}
      />,
      <FlatButton
        label="Next"
        primary={true}
        disabled={!this.props.goalText}
        onTouchTap={() => { this.nextButtonActionsOnGoal() }}
      />,
    ];

    const milestonesActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => { this.props.closeAddMilestonesDialog() }}
      />,
      <FlatButton
        label="Next"
        primary={true}
        disabled={!this.props.milestonesText}
        onTouchTap={() => { this.nextButtonActionsOnMilestones() }}
      />,
  ];

    const stepsActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => { this.props.closeAddStepsDialog() }}
      />,
      <FlatButton
        label="Next"
        primary={true}
        disabled={!this.props.stepsText}
        onTouchTap={() => { this.nextButtonActionsOnSteps() }}
      />,
    ]

    return (
      <div>
        <h2>{this.props.user.user.username}{'\''}s Goals</h2>
          <MuiThemeProvider muiTheme={muiTheme}>
            <RaisedButton label="+" onClick={ () => this.props.openAddGoalDialog() } />
          </MuiThemeProvider>
        <h1>{g.goal}
          <input
            className="checkbox"
            type="checkbox"
            onChange={this.handleChange}
            value={this.props.checked}
          />
        </h1>
        <Milestone onChange={this.handleChange} milestones={g.milestones} user={this.props.user.user.username}/>



        <MuiThemeProvider muiTheme={muiTheme}>
          <Dialog
            title="Add New Goal"
            actions={modalActions}
            modal={true}
            open={!!this.props.openGoalDialog}
          >
          <MuiText
            hintText="goal"
            floatingLabelText="goal"
            text={this.props.goalText}
            handleChange={this.props.handleGoalInput}
            />
          </Dialog>
        </MuiThemeProvider>

        <MuiThemeProvider muiTheme={muiTheme}>
          <Dialog
            title="Add New milestones"
            actions={milestonesActions}
            modal={true}
            open={!!this.props.openMilestonesDialog}
          >
          <MuiText
            hintText="milestone"
            floatingLabelText="milestone"
            text={this.props.milestoneText}
            handleChange={this.props.handleMilestonesInput}
            />
          </Dialog>
        </MuiThemeProvider>

        <MuiThemeProvider muiTheme={muiTheme}>
          <Dialog
            title="Add New steps"
            actions={stepsActions}
            modal={true}
            open={!!this.props.openStepsDialog}
          >
          <MuiText
            hintText="step"
            floatingLabelText="step"
            text={this.props.stepsText}
            handleChange={this.props.handleStepsInput}
            />
          </Dialog>
        </MuiThemeProvider>
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
    milestonesText: state.milestones.milestonesText,
    stepsText: state.steps.stepsText,
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
      handleMilestonesInput,
      handleStepsInput,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Goal_page);
