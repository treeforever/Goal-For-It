import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from "react-router"
import { Badge, RaisedButton, FlatButton, Dialog, AppBar, IconMenu, MenuItem, IconButton, SvgIcon } from 'material-ui'
import { Step, Stepper, StepLabel} from 'material-ui/Stepper';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

import { addGoal, fetchGoals, checkedGoal, showLatestGoal, openAddGoalDialog, closeAddGoalDialog, handleGoalInput } from "../actions/goalActions"
import { addMilestones, openAddMilestonesDialog, closeAddMilestonesDialog, handleMilestonesInput, addMilestoneInState} from "../actions/milestoneActions"
import { addSteps, openAddStepsDialog, closeAddStepsDialog, handleStepsInput, selectMilestone } from "../actions/stepActions"
import { openPotDialog, closePotDialog, handleMoneyInput, addGroupMoney, fetchMoney } from "../actions/moneyActions"
import { addNotif } from "../actions/groupActions"
import { signOut, changeViewerToCurrentUser } from '../actions/userActions';

import NewMilestone from "../components/NewMilestone"
import NewStep from "../components/NewStep"
import MoneyStatus from '../components/MoneyStatus'
import muiTheme from '../components/MuiTheme'
import MuiText from '../components/MuiText'


const customContentStyle = {
  width: '35%',
};

class Nav extends Component {

  componentWillMount = () => {
    this.props.fetchMoney(this.props.user.currentUser.userId);
  }

  nextButtonActionsOnGoal = () => {
    this.props.addGoal(this.props.goalText, this.props.user.currentUser.userId)
    this.props.addNotif({type: "notification", content: `${this.props.user.currentUser.username} has added a new goal: ${this.props.goalText}`})
    this.props.closeAddGoalDialog()
    this.props.openAddMilestonesDialog()
  }

  nextButtonActionsOnMilestones = () => {
    this.props.addMilestoneInState()
    this.props.addMilestones(this.props.milestonesText, this.props.newGoal.id)
    this.props.addNotif({type: "notification", content: `${this.props.user.currentUser.username} has added milestones: ${this.props.newMilestones}`})
    this.props.closeAddMilestonesDialog()
    this.props.openAddStepsDialog()
  }

  nextButtonActionsOnSteps = () => {
    //change stepsText
    this.props.addSteps(this.props.stepsText, this.props.steps.selectedMilestones, this.props.newMilestones, this.props.newMilestonesIds)
    this.props.addNotif({type: "notification", content: `${this.props.user.currentUser.username} has added new steps: ${this.props.stepsText}`})
    this.props.closeAddStepsDialog()
    this.props.showLatestGoal()
    this.props.fetchGoals(this.props.user.currentUser.userId)
    // this.props.fetchUser(this.props.user.currentUser.userId)

  }

  submitMoney = (moneyInput, groupMoney) => {
    this.props.addGroupMoney(moneyInput, groupMoney)
    this.props.closePotDialog()
  }

  fetchCurretUserGoal = () => {
    this.props.fetchGoals(this.props.user.currentUser.userId)
    this.props.changeViewerToCurrentUser()
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
              className='App-title'
              title='GOAL FOR IT!'
              iconElementLeft={<MoneyStatus currentUser={this.props.user.currentUser.username} money={this.props.money} />}
              iconElementRight={<DropdownMenu
                                  fetchGoal={this.fetchCurretUserGoal}
                                  currentUser={`${this.props.user.currentUser.username}`}
                                  openAddGoalDialog={this.props.openAddGoalDialog}
                                  openPotDialog={this.props.openPotDialog}
                                  signOut={this.props.signOut}
                                  newNotifs={this.props.newNotifs}
                               />}
              className="App-Bar"
            />
          </MuiThemeProvider>
        </header>

        <MuiThemeProvider muiTheme={muiTheme}>
          <Dialog
            title="Add New Goal: what goal can wake you up every morning?"
            actions={goalActions}
            modal={true}
            open={!!this.props.openGoalDialog}
          >
          <MuiText
            hintText="goal"
            floatingLabelText="goal"
            fullWidth={true}
            text={this.props.goalText}
            handleChange={this.props.handleGoalInput}
            handleSubmit={this.props.handleGoalInput}
            addRow={()=> { }}
            />
          <div style={{width: '70%', maxWidth: 700, margin: 'auto'}}>
             <Stepper activeStep={0}>
               <Step>
                 <StepLabel>Create a goal</StepLabel>
               </Step>
               <Step>
                 <StepLabel>Create milestones</StepLabel>
               </Step>
               <Step>
                 <StepLabel>Create steps</StepLabel>
               </Step>
             </Stepper>
           </div>
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
              contentStyle={customContentStyle}
            >
            <img src="../../images/coins.jpg" alt="milestone" height="50" width="60"/>
            <form action="/your-charge-code" method="POST" id="payment-form">
              <span className="payment-errors"></span>
                <MuiText
                  hintText=""
                  floatingLabelText="I would like to pitch in $"
                  fullWidth={false}
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
        <Link to="/" id="my-goals">
        <SvgIcon className="home-page">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
        <span className="username" onClick={this.props.fetchGoal}>{this.props.currentUser}</span>
        </Link>

        <div id="notification-bell">
          <MuiThemeProvider>
            <Badge
              badgeContent={this.props.newNotifs}
              secondary={true}
              badgeStyle={{top: 12, right: 12}}
            >
              <Link to="group"><IconButton tooltip="Group Huddle">
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
              <MenuItem primaryText="Add Incentives" onClick={ () => this.props.openPotDialog() }/>
              <MenuItem><Link to="group" id="group-huddle">Group Huddle</Link></MenuItem>
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
  newNotifs: state.group.newNotifs,
  groupp: state.group,
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
    fetchGoals,
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
    changeViewerToCurrentUser,
    showLatestGoal
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)

// <MenuItem><Link to="/" id="my-goals">My Goals</Link></MenuItem>
