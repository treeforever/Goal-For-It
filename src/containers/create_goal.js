import React, {Component} from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'


import Form1 from "../components/Form1"
import Form2 from "../components/Form2"
import { addGoal } from "../actions/goalActions"



class NewGoal extends Component {
  // constructor(props){
  //   super(props)
  //   state:
  // }

  handleSave = text => {
      this.props.addGoal(text)
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
        <input
          id="GET-name"
          type="text"
          placeholder="Enter a new goal"
          onKeyUp={this.handleSave}
          />

        <Form1 onSave={this.handleSave}/>
        <Form2 onSave={this.handleSave}/>

        <h3>
          Newly created goal: {this.renderGoals(this.props.goals.goals)}
        </h3>
      </div>
    )
  }
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
