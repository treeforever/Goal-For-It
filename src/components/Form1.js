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
    this.state.milestoneInputs[milestoneIndex].stepInputs.push(newStep);

    this.setState({
      milestoneInputs: [
        ...this.state.milestoneInputs,
      ]
      // [i].stepInputs: [...this.state.milestoneInputs[i].stepInputs, newStep]
    })
    // console.log(this.state.milestoneInputs[milestoneIndex])

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
