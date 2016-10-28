import React, {Component} from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import MuiText from '../components/MuiText'

import { addGoal } from "../actions/goalActions"
import { addMilestones } from "../actions/milestoneActions"
import { addSteps } from "../actions/stepActions"
import { addNotif } from "../actions/groupActions"



// import Milestone from './Milestone'
import Step from '../components/Step'
import Modal from '../components/Modal'


class Form1 extends Component {
  state = {
    milestoneInputs: [{
      hintText: 'What are the milestones?',
      floatingLabelText: 'What are the milestones',
      stepInputs: []
    }],
  }

  handleSaveGoal = text => {
    console.log("text here", text)
    this.props.addGoal(text)
    this.props.addNotif({type: "notification", content: `NOTIFICATION: user 1 has added a new goal: ${text}`})
  }

  handleSaveMilestones = text => {
      this.props.addMilestones(text)
      this.props.addNotif({type: "notification", content: `NOTIFICATION: user 1 has added a new milestone: ${text}`})
  }

  handleSaveSteps= text => {
      this.props.addSteps(text)
      this.props.addNotif({type: "notification", content: `NOTIFICATION: user 1 has added a new step: ${text}`})
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


  // addStep = (milestoneIndex) => {
  //   const newStep = {
  //     hintText: 'what are the steps?',
  //     floatingLabelText: 'What are the steps'
  //   }
  //   const currentSteps = this.state.milestoneInputs[milestoneIndex].stepInputs;
  //   const newStepsList = currentSteps.push(newStep);
  //   this.state.milestoneInputs[milestoneIndex].stepInputs = newStepsList;
  //
  //   this.setState({
  //     milestoneInputs: [
  //       ...this.state.milestoneInputs, {
  //       }
  //     ]
  //
  //   })
  // }

  render() {
    return (
      <div>
        <Modal
          onSave={this.handleSaveGoal}
          hintText="be as ambitious as you want"
          floatingLabelText="What is your next ambitious goal?"
          />

      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    goal: state.goals.goals,
    milestones: state.milestones
  }
}

const mapDispatchToProps = (dispatch) => {
  //whenver addGoal is called, the result should be passed
  //to all of reducers
  return bindActionCreators({
                              addGoal: addGoal,
                              addMilestones: addMilestones,
                              addSteps: addSteps,
                              addNotif: addNotif
                            }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form1)


// {
//   this.state.milestoneInputs.map((elm, index) => {
//     return (
//       <Milestone
//       //   onSaveMilestones={this.props.onSaveMilestones}
//       //   addRow={this.addRow}
//       //   addStep={this.addStep}
//       //   milestone={elm}
//       //   milestoneIndex={index}/>
//
//     )
//   })
// }
// //
