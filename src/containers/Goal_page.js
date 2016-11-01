import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Checkbox } from 'material-ui'
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from '../components/MuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin';

import { fetchGoal, fetchGoals, checkedGoal, openAddGoalDialog, closeAddGoalDialog, handleGoalInput } from "../actions/goalActions"
import { fetchUser } from "../actions/userActions"
import { addMilestones, openAddMilestonesDialog, closeAddMilestonesDialog, handleMilestoneInput, handleMilestonesInput, addMilestoneRow} from "../actions/milestoneActions"
import { addSteps, openAddStepsDialog, closeAddStepsDialog, handleStepInput, handleStepsInput, selectMilestone } from "../actions/stepActions"
import { addNotif } from "../actions/groupActions"
import { moneyGoal, moneyMile, moneyStep } from "../actions/moneyActions"

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
    this.props.fetchUser(this.props.user.currentUser.userId);

  }

  render() {
    let g = this.props.goal;
    return (
      <div>
       <Nav title={'GOAL FOR IT'}/>
       <main className="container">
         <span className="creator-info">{`${this.props.goal.username}${'\''}s Goals`}</span>
         <br></br>
           <MuiThemeProvider muiTheme={muiTheme}>
             <HardwareKeyboardArrowLeft onClick={}/>
           </MuiThemeProvider>

             <h1>{g.goal}

           <MuiThemeProvider muiTheme={muiTheme}>
             <HardwareKeyboardArrowRight />
           </MuiThemeProvider>

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
        </main>
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
      fetchGoals,
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
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Goal_page);
