import React, {Component} from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'

import Form1 from "../components/Form1"
import Form2 from "../components/Form2"
import { addGoal } from "../actions/goalActions"
import { addMilestones } from "../actions/milestoneActions"
import { addSteps } from "../actions/stepActions"
import { addNotif } from "../actions/groupActions"


class NewGoal extends Component {

  handleSaveGoal = text => {
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

  renderList = (list) => {
    return (
      <ul>
        {
          list.map((item, index) => (
            <li key={index}>
              {index + 1}. {item.goal}
            </li>
          ))
        }
      </ul>
    )
  }

  renderMilestones = (list) => {
    return (
      <ul>
        {
          list.map((item, index) => (
           <li key={index}>
             {index + 1}. {item.milestones}
           </li>
          ))
        }
      </ul>
    )
  }

  render() {
    return (
      <div>
        <Form1 onSaveGoal={this.handleSaveGoal} onSaveMilestones={this.handleSaveMilestones}/>
        <Form2 onSaveSteps={this.handleSaveSteps} milestones={this.props.milestones.milestones}/>

        <h3>
          Newly created goal: {this.renderList(this.props.goals.goals)}
        </h3>
        <h3>
          Newly created milestones: {this.renderMilestones(this.props.milestones.milestones)}
        </h3>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    goals: store.goals,
    milestones: store.milestones
  }
}

// Anything returned from this function will end up as props
// on the newGoal container
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

// Promote newGoal from a component to a container - it needs to know
// about this new dispatch method, addGoal. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(NewGoal)
