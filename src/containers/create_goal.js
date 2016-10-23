import React, {Component} from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import InputBox from "../components/InputBox"

import { addGoal } from "../actions/goalActions"



class NewGoal extends Component {
  handleSave = text => {
    if (text.length !== 0) {
      this.props.addGoal(text) //bc in demo, this is a dumb component
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
        <h1>Goal</h1>
          <InputBox newTodo
            onSave={this.handleSave}
            placeholder="What's your next goal?"
           />

        <h2>Milestones</h2>
          <InputBox newTodo
            onSave={this.handleSave}
            placeholder="Break down your goal to less than 5 milestones"
           />

        <h3>Steps</h3>
          <InputBox newTodo
            onSave={this.handleSave}
            placeholder="What are the steps to achieve this milestone?"
           />

        <h3>
          Newly created goal: {this.renderGoals(this.props.goals.goals)}
        </h3>

        <form className="form-horizontal" role="form">
	<div className="form-group">
		<label className="col-md-2 control-label">Name</label>
		<div className="col-md-4">
			<input type="text" className="form-control" name="name" />
		</div>
	</div>
	<div className="form-group">
		<label className="col-md-2 control-label">Employees</label>
		<div className="col-md-4">
			<input type="text" className="form-control" name="employees"/>
		</div>
	</div>
	<div className="form-group">
		<label className="col-md-2 control-label">Headoffice</label>
		<div className="col-md-4">
			<input type="text" className="form-control" name="headoffice"/>
		</div>
	</div>
	<div className="form-group">
		<div>
			<input type="submit" value="Submit" className="btn btn-primary"/>
		</div>
	</div>
</form>

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
