import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from "react-router"
import { RaisedButton, FlatButton, Dialog, AppBar, List, IconMenu, MenuItem, IconButton } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
// import injectTapEventPlugin from 'react-tap-event-plugin';

import { addGoal, fetchGoal, checkedGoal, openAddGoalDialog, closeAddGoalDialog, handleGoalInput } from "../actions/goalActions"
import { addMilestones, openAddMilestonesDialog, closeAddMilestonesDialog, handleMilestoneInput, handleMilestonesInput, addMilestoneRow} from "../actions/milestoneActions"
import { addSteps, openAddStepsDialog, closeAddStepsDialog, handleStepInput, handleStepsInput, selectMilestone, addStepRow} from "../actions/stepActions"
import { openPotDialog, closePotDialog, handleMoneyInput, addGroupMoney, fetchUserMoney, fetchGroupMoney } from "../actions/moneyActions"
import { addNotif } from "../actions/groupActions"
import { signOut } from '../actions/userActions';

import NewMilestone from "../components/NewMilestone"
import NewStep from "../components/NewStep"
import muiTheme from '../components/MuiTheme'
import MuiText from '../components/MuiText'

// injectTapEventPlugin();

class Nav extends Component {
  nextButtonActionsOnGoal = () => {
    this.props.addGoal(this.props.goalText)
    this.props.addNotif({type: "notification", content: `user 1 has added a new goal: ${this.props.goalText}`})
    this.props.closeAddGoalDialog()
    this.props.openAddMilestonesDialog()
  }

  nextButtonActionsOnMilestones = () => {
    this.props.addMilestones(this.props.milestonesText, this.props.newGoal.id)
    this.props.addNotif({type: "notification", content: `user 1 has added milestones: ${this.props.newMilestones}`})
    this.props.closeAddMilestonesDialog()
    this.props.openAddStepsDialog()
  }

  nextButtonActionsOnSteps = () => {
    //change stepsText
    this.props.addSteps(this.props.stepsText)
    this.props.addNotif({type: "notification", content: `user 1 has added new steps: ${this.props.stepsText}`})
    this.props.closeAddStepsDialog()
  }


  render(){
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
        onTouchTap={() => { this.nextButtonActionsOnGoal() }}
        />,
    ];
    return (
      <nav >
        <span id="dropdown-menu-group">
          <MuiThemeProvider muiTheme={muiTheme}>
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="New Goal" onClick={ () => this.props.openAddGoalDialog() }/>
            <MenuItem><Link to="/" id="my-goals">My Goals</Link></MenuItem>
            <MenuItem><Link to="group" id="group-huddle">Group Huddle</Link></MenuItem>
            <MenuItem primaryText="Start Challenge" onClick={ () => this.props.openPotDialog() }/>
            <MenuItem
              onClick={() => this.props.signOut()}
              primaryText="Sign Out" />
          </IconMenu>
          </MuiThemeProvider>
        </span>

        <MuiThemeProvider muiTheme={muiTheme}>
          <Dialog
            title="Add New Goal"
            actions={goalActions}
            modal={true}
            open={!!this.props.openGoalDialog}
          >
          <MuiText
            hintText="goal"
            floatingLabelText="goal"
            text={this.props.goalText}
            handleChange={this.props.handleGoalInput}
            handleSubmit={this.props.handleGoalInput}
            addRow={()=> { }}
            />
          </Dialog>
        </MuiThemeProvider>

        <NewMilestone
          openMilestonesDialog={this.props.openMilestonesDialog}
          closeAddMilestonesDialog={this.props.closeAddMilestonesDialog}
          nextButtonActionsOnMilestones={this.nextButtonActionsOnMilestones}
          milestoneText={this.props.milestoneText}
          milestonesText={this.props.milestonesText}
          milestoneRows={this.props.milestoneRows}
          handleMilestoneInput={this.props.handleMilestoneInput}
          handleMilestonesInput={this.props.handleMilestonesInput}
          addMilestoneRow={this.props.addMilestoneRow}
          />

        <NewStep
          openStepsDialog={this.props.openStepsDialog}
          closeAddStepsDialog={this.props.closeAddStepsDialog}
          nextButtonActionsOnSteps={this.nextButtonActionsOnSteps}
          stepsText={this.props.stepsText}
          stepsText={this.props.stepsText}
          stepRows={this.props.stepRows}
          newMilestones={this.props.newMilestones}
          selectMilestone={this.props.selectMilestone}
          handleStepInput={this.props.handleStepInput}
          handleStepsInput={this.props.handleStepsInput}
          addStepRow={this.props.addStepRow}
          />
        </nav>
    )
  }
}

const mapStateToProps = (state) => ({
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
  group: state.group.group,
  notifs: state.group.notifs,
  potDialog: state.money.potDialog,
  groupMoney: state.money.groupMoney,
  money: state.money
  });

const mapDispatchToProps = (dispatch) => {
  //whenver addGoal is called, the result should be passed
  //to all of reducers
  return bindActionCreators({
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
    openAddGoalDialog,
    openPotDialog,
    closePotDialog,
    handleMoneyInput,
    addGroupMoney,
    fetchGroupMoney,
    fetchUserMoney,
    signOut,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
