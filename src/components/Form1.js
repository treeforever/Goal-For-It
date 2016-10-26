import React, {Component} from 'react'
import MuiText from "./MuiText"


class Form1 extends Component {

  render() {
    return (
      <div>
        <MuiText onSave={this.handleSaveGoal} hintText="be as specific as you can" floatingLabelText="What is your next ambitious goal?"/>
        <MuiText onSave={this.handleSaveMilestones} hintText="what are the milestones?" floatingLabelText="What are the milestones"/>


      </div>
    )
  }

}

export default Form1;
