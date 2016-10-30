import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { RaisedButton, FlatButton, Dialog } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { addGoal, fetchGoal, checkedGoal, openAddGoalDialog, closeAddGoalDialog, handleGoalInput } from "../actions/goalActions"
import { fetchUser } from "../actions/userActions"
import { addMilestones, openAddMilestonesDialog, closeAddMilestonesDialog, handleMilestoneInput, handleMilestonesInput, addMilestoneRow} from "../actions/milestoneActions"
import { addSteps, openAddStepsDialog, closeAddStepsDialog, handleStepsInput, selectMilestone} from "../actions/stepActions"
import { addNotif } from "../actions/groupActions"

import Milestone from "../components/MilestoneIndex"
import Form1 from "./Form1"
import NewMilestone from "../components/NewMilestone"
import NewStep from "../components/NewStep"
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

        <NewMilestone
          openMilestonesDialog={this.props.openMilestonesDialog}
          closeAddMilestonesDialog={this.props.closeAddMilestonesDialog}
          nextButtonActionsOnMilestones={this.nextButtonActionsOnMilestones}
          milestoneText={this.props.milestoneText}
          milestoneRows={this.props.milestoneRows}
          milestonesText={this.props.milestonesText}
          handleMilestoneInput={this.props.handleMilestoneInput}
          handleMilestonesInput={this.props.handleMilestonesInput}
          addMilestoneRow={this.props.addMilestoneRow}
          />

        <NewStep
          openStepsDialog={this.props.openStepsDialog}
          closeAddStepsDialog={this.props.closeAddStepsDialog}
          nextButtonActionsOnSteps={this.props.nextButtonActionsOnSteps}
          stepsText={this.props.stepsText}
          selectMilestone={this.props.selectMilestone}
          stepsText={this.props.stepsText}
          handleStepsInput={this.props.handleStepsInput}
          addStepRow={this.props.addMilestoneRow}
          newMilestones={this.props.newMilestones}
          />

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
    milestoneText: state.milestones.milestoneText,
    milestonesText: state.milestones.milestonesText,
    milestoneRows: state.milestones.milestoneRows,
    newMilestones: state.milestones.newMilestones,
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
      handleMilestoneInput,
      handleMilestonesInput,
      handleStepsInput,
      addMilestoneRow,
      selectMilestone,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Goal_page);
