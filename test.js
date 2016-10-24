import React, {Component} from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { addGoal } from "../actions/goalActions"
import { StepInput} from "../components/StepInput"

// import { addGoal } from "../actions/goalActions"

class NewGoal extends Component {
  handleSave = (event) => {
    if (event.keyCode === 13) {
      this.props.addGoal(event.target.value)
    }
  }

  renderGoals = (goals) => {
    return (
      <ul>
        {goals.map((goal, index) => {
        return <li>{index + 1}. {goal.goal} </li>
      })}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <StepInput
          onSave={this.handleSave}
          placeholder="What's your next goal?"
        />
        <h3>
          Newly created goal: {this.renderGoals(this.props.goals.goals)}
        </h3>

      </div>


    )
  }


  // handleSave = text => {
  //   if (text.length !== 0) {
  //     this.props.addGoal(text) //bc in demo, this is a dumb component
  //   }
  // }


  // render() {
  //   return (
  //     <div>
  //       <StepInput
  //                  onSave={this.handleSave}
  //                  placeholder="What's your next goal?" />
  //     </div>
  //   )
  // }
}

const mapStateToProps = (state) => {
  return {
    goals: state.goals
  }
}

// Anything returned from this function will end up as props
// on the newGoal container
const mapDispatchToProps = (dispatch) => {
  //whenver addGoal is called, the result should be passed
  //to all of reducers
  return bindActionCreators({ addGoal: addGoal }, dispatch)
}

// Promote newGoal from a component to a container - it needs to know
// about this new dispatch method, addGoal. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(NewGoal)
