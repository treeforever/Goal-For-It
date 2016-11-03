import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Checkbox } from 'material-ui'
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from '../components/MuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin';

import { fetchGoal, fetchGoals, fetchFriendGoals, checkedGoal, openAddGoalDialog, closeAddGoalDialog, handleGoalInput, showPreviousGoal, showNextGoal } from "../actions/goalActions"
import { fetchUser } from "../actions/userActions"
import { addMilestones, openAddMilestonesDialog, closeAddMilestonesDialog, handleMilestoneInput, handleMilestonesInput, addMilestoneRow} from "../actions/milestoneActions"
import { addSteps, openAddStepsDialog, closeAddStepsDialog, handleStepInput, handleStepsInput, selectMilestone } from "../actions/stepActions"
import { addNotif } from "../actions/groupActions"
import { moneyGoal, moneyMile, moneyStep } from "../actions/moneyActions"
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';



import Milestone from "../components/MilestoneIndex"

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
     if(!this.props.goal.goal_checked){
      this.audio.pause()
      this.audio.currentTime = 0
      this.audio.play()
    }

    const content = (this.props.goal.goal_checked ? `${this.props.user.user.username} unchecked their goal: ${this.props.goal.goal}` : `${this.props.user.user.username} completed their goal: ${this.props.goal.goal}`)

    this.props.addNotif({
      type: "notificaiton",
      content: content })

    this.props.moneyGoal(this.props.user.currentUser.userId, this.props.goal.goal_checked, this.props.money.groupMoney, this.props.money.userMoney);
  }

  arrowLeftOnClick = () => {
    this.props.showPreviousGoal()
    this.props.fetchFriendGoals(this.props.user.view_id)
  }

  arrowRightOnClick = () => {
    this.props.showNextGoal()
    this.props.fetchFriendGoals(this.props.user.view_id)
  }

  componentWillMount = () => {
    if(this.props.goal.goal){
      return
    }else{
      this.props.fetchGoals(this.props.user.currentUser.userId);
    }
    this.props.fetchUser(this.props.user.currentUser.userId);
  }


  render() {
    let g = this.props.goal;
    return (
      <div>
       <Nav />
       <main className="container">
         <div className="left-column">

         </div>

         <article className="goal">
           <h2 className="creator-info">{`${this.props.goal.username}${'\''}s Goals`}</h2>
            <img src="../../images/trophy.jpg" alt="milestone" height="50" width="50"/>
            <h1 className="goal-title">
              <MuiThemeProvider muiTheme={muiTheme}>
                <HardwareKeyboardArrowLeft onClick={this.arrowLeftOnClick} />
              </MuiThemeProvider>
                {g.goal}
              <audio ref={(elem) => this.audio = elem} id="audio" src="../../sound/Cha-Ching.mp3" ></audio>
            <MuiThemeProvider muiTheme={muiTheme}>
              <HardwareKeyboardArrowRight onClick={this.arrowRightOnClick}/>
            </MuiThemeProvider>
            <MuiThemeProvider style={styles.block}>
              <Checkbox
                className='checkbox'
                style={styles.checkbox}
                onCheck={this.handleChange}
                checked={g.goal_checked}
                disabled={(this.props.goal.username === this.props.user.currentUser.username ? false : true)}
              />
            </MuiThemeProvider>
          </h1>
            <Milestone onChange={this.handleChange} milestones={g.milestones} user={this.props.goal.username} currentUser={this.props.user.currentUser} money={this.props.money}/>
          </article>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    goal: state.goal.goal,
    money: state.money,
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
      fetchGoals,
      fetchFriendGoals,
      fetchUser,
      checkedGoal,
      addNotif,
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
      selectMilestone,
      moneyGoal,
      showPreviousGoal,
      showNextGoal,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Goal_page);
