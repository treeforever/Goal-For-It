import React, {Component} from 'react'
import MuiText from './MuiText'


import Milestone from './Milestone'
import Step from './Step'





class Form1 extends Component {
  state = {
    milestoneInputs: [{
      hintText: 'What are the milestones?',
      floatingLabelText: 'What are the milestones',
      stepInputs: []
    }]

  }

  addRow = (value) => {
    if (value){
      let newMilestone = {
        hintText: 'What are the milestones?',
        floatingLabelText: 'What are the milestones',
        stepInputs: []
      }
      this.setState({
        milestoneInputs: [...this.state.milestoneInputs, newMilestone]
      })
    } else {
      return
    }
  }

  addStep = (milestoneIndex) => {
    const newStep = {
      hintText: 'what are the steps?',
      floatingLabelText: 'What are the steps'
    }
    const currentSteps = this.state.milestoneInputs[milestoneIndex].stepInputs;
    const newStepsList = currentSteps.push(newStep);
    this.state.milestoneInputs[milestoneIndex].stepInputs = newStepsList;

    this.setState({
      milestoneInputs: [
        ...this.state.milestoneInputs, {
        }
      ]

    })



  }

  render() {
    return (
      <div>
        <MuiText onSave={this.props.onSaveGoal} hintText="be as specific as you can" floatingLabelText="What is your next ambitious goal?"/>
        {
          this.state.milestoneInputs.map((elm, index) => {
            return (
              <Milestone
                onSaveMilestones={this.props.onSaveMilestones}
                addRow={this.addRow}
                addStep={this.addStep}
                milestone={elm}
                milestoneIndex={index}/>
            )
          })
        }
      </div>
    )
  }

}

export default Form1;
