import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addGoal, fetchGoal, openAddGoalDialog, closeAddGoalDialog, handleGoalInput } from "../actions/goalActions"
import { addMilestones, openAddMilestonesDialog, closeAddMilestonesDialog, handleMilestonesInput} from "../actions/milestoneActions"
import { addSteps, openAddStepsDialog, closeAddStepsDialog, handleStepsInput} from "../actions/stepActions"

import { fetchUser } from "../actions/userActions"

import Milestone from "../components/Milestone"
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

  componentWillMount() {
    this.props.fetchGoal();
    this.props.fetchUser(1);
  }

  render() {
    var g = this.props.goals;
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
        <h1>{g.goal}</h1>
        <Milestone milestones={g.milestones} />


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
    goals: state.goals.goals,
    openGoalDialog: state.goals.openGoalDialog,
    openMilestonesDialog: state.milestones.openMilestonesDialog,
    openStepsDialog: state.steps.openStepsDialog,
    goalText: state.goals.goalText,
    milestonesText: state.milestones.milestonesText,
    stepsText: state.steps.stepsText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchGoal,
      fetchUser,

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
