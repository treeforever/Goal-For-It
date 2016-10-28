import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchGoal, openAddGoalDialog, closeAddGoalDialog, handleGoalInput, activateNextButton } from "../actions/goalActions"
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

  componentWillMount() {
    // this.serverRequest.abort();
    this.props.fetchGoal();
    this.props.fetchUser(1);
  }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.newGoal) {
  //
  //   }
  // }

  render() {
    var g = this.props.goals;
    const modalActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={()=> {this.props.closeAddGoalDialog()}}
      />,
      <FlatButton
        label="Next"
        primary={true}
        disabled={!this.props.text}
        onTouchTap={this.handleClose}
        onClick={this.handleSubmit}
      />,
    ];
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
            onSave={this.props.onSave}
            hintText="goal"
            floatingLabelText="goal"
            text={this.props.text}
            handleChange={this.props.handleGoalInput}
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
    text: state.goals.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchGoal,
      fetchUser,
      openAddGoalDialog,
      closeAddGoalDialog,
      handleGoalInput,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Goal_page);
