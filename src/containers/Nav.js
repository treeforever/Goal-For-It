import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from "react-router"
import { Badge, FlatButton, Dialog, AppBar, IconMenu, MenuItem, IconButton } from 'material-ui'
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
// import injectTapEventPlugin from 'react-tap-event-plugin';

import { addGoal, fetchGoal, checkedGoal, openAddGoalDialog, closeAddGoalDialog, handleGoalInput } from "../actions/goalActions"
import { addMilestones, openAddMilestonesDialog, closeAddMilestonesDialog, handleMilestonesInput, addMilestoneInState} from "../actions/milestoneActions"
import { addSteps, openAddStepsDialog, closeAddStepsDialog, handleStepsInput, selectMilestone } from "../actions/stepActions"
import { openPotDialog, closePotDialog, handleMoneyInput, addGroupMoney, fetchMoney } from "../actions/moneyActions"
import { addNotif } from "../actions/groupActions"
import { signOut } from '../actions/userActions';

import NewMilestone from "../components/NewMilestone"
import NewStep from "../components/NewStep"
import MoneyStatus from '../components/MoneyStatus'
import muiTheme from '../components/MuiTheme'
import MuiText from '../components/MuiText'

// injectTapEventPlugin();

class Nav extends Component {

  componentWillMount = () => {
    this.props.fetchMoney(this.props.user.currentUser.userId);
  }

  nextButtonActionsOnGoal = () => {
    this.props.addGoal(this.props.goalText)
    this.props.addNotif({type: "notification", content: `user 1 has added a new goal: ${this.props.goalText}`})
    this.props.closeAddGoalDialog()
    this.props.openAddMilestonesDialog()
  }

  nextButtonActionsOnMilestones = () => {
    this.props.addMilestoneInState()
    this.props.addMilestones(this.props.milestonesText, this.props.newGoal.id)
    this.props.addNotif({type: "notification", content: `user 1 has added milestones: ${this.props.newMilestones}`})
    this.props.closeAddMilestonesDialog()
    this.props.openAddStepsDialog()
  }

  nextButtonActionsOnSteps = () => {
    //change stepsText
    this.props.addSteps(this.props.stepsText, this.props.steps.selectedMilestones, this.props.newMilestones, this.props.newMilestonesIds)
    this.props.addNotif({type: "notification", content: `user 1 has added new steps: ${this.props.stepsText}`})
    this.props.closeAddStepsDialog()
  }

  submitMoney = (moneyInput, groupMoney) => {
    this.props.addGroupMoney(moneyInput, groupMoney)
    this.props.closePotDialog()
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

    const potActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => { this.props.closePotDialog() }}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={!this.props.newMoneyInput}
        onTouchTap={() => { this.submitMoney(this.props.newMoneyInput, this.props.groupMoney)}}
      />,
    ];

    return (
      <div>
        <header>
          <MuiThemeProvider>
            <AppBar
              title='GOAL-FOR-IT'
              iconElementLeft={true ? <MoneyStatus currentUser={this.props.user.currentUser.username} money={this.props.money} /> : <span>Start a Challenge</span>}
              iconElementRight={<DropdownMenu
                                  currentUser={`Hello ${this.props.user.currentUser.username}!`}
                                  openAddGoalDialog={this.props.openAddGoalDialog}
                                  openPotDialog={this.props.openPotDialog}
                                  signOut={this.props.signOut} />}
              className="App-Bar"
            />
          </MuiThemeProvider>
        </header>

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
          milestonesText={this.props.milestonesText}
          handleMilestonesInput={this.props.handleMilestonesInput}
          />

        <NewStep
          openStepsDialog={this.props.openStepsDialog}
          closeAddStepsDialog={this.props.closeAddStepsDialog}
          nextButtonActionsOnSteps={this.nextButtonActionsOnSteps}
          stepsText={this.props.stepsText}
          stepsText={this.props.stepsText}
          newMilestones={this.props.newMilestones}
          selectMilestone={this.props.selectMilestone}
          selectedMilestone={this.props.steps.selectedMilestone}
          selectedMilestones={this.props.steps.selectedMilestones}
          handleStepsInput={this.props.handleStepsInput}
          addSteps={this.props.addSteps}
          />

          <MuiThemeProvider muiTheme={muiTheme}>
            <Dialog
              title="Place group incentives:"
              actions={potActions}
              modal={true}
              open={!!this.props.potDialog}
            >
            <form action="/your-charge-code" method="POST" id="payment-form">
              <span className="payment-errors"></span>
                <MuiText
                  hintText=""
                  floatingLabelText="I would like to pitch in $"
                  text={this.props.newMoneyInput}
                  handleChange={this.props.handleMoneyInput}
                  handleSubmit={this.props.handleMoneyInput}
                  addRow={()=> { }}
                  />
              <div className="form-row">
                <label>
                  <span>Card Number</span>
                  <input type="text" size="20" data-stripe="number" />
                </label>
              </div>

              <div className="form-row">
                <label>
                  <span>Expiration (MM/YY)</span>
                  <input type="text" size="2" data-stripe="exp_month" />
                </label>
                <span> / </span>
                <input type="text" size="2" data-stripe="exp_year" />
              </div>

              <div className="form-row">
                <label>
                  <span>CVC</span>
                  <input type="text" size="4" data-stripe="cvc" />
                </label>
              </div>
            </form>

            </Dialog>
          </MuiThemeProvider>
        </div>
    )
  }
}

class DropdownMenu extends Component {
  render(){
    return (
      <div className="nav-right">
        <span className="username">{this.props.currentUser}</span>
        <div id="notification-bell">
          <MuiThemeProvider>
            <Badge
              badgeContent={1}
              secondary={true}
              badgeStyle={{top: 12, right: 12}}
            >
              <Link to="group"><IconButton tooltip="Notifications">
                <NotificationsIcon />
              </IconButton></Link>
            </Badge>
          </MuiThemeProvider>
        </div>
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
      </div>

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
  milestonesText: state.milestones.milestonesText,
  newMilestones: state.milestones.newMilestones,
  newMilestonesIds: state.milestones.newMilestonesIds,
  stepsText: state.steps.stepsText,
  newSteps: state.steps.newSteps,
  steps: state.steps,
  group: state.group.group,
  notifs: state.group.notifs,
  potDialog: state.money.potDialog,
  newMoneyInput: state.money.newMoneyInput,
  groupMoney: state.money.groupMoney,
  money: state.money,
  challenge: state.money.challenge,
  });

const mapDispatchToProps = (dispatch) => {
  //whenver addGoal is called, the result should be passed
  //to all of reducers
  return bindActionCreators({
    addNotif,
    addGoal,
    addMilestones,
    addMilestoneInState,
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
    selectMilestone,
    openPotDialog,
    closePotDialog,
    handleMoneyInput,
    addGroupMoney,
    fetchMoney,
    signOut,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
