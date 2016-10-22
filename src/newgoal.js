import React, {Component} from 'react'
import { connect } from "react-redux"

import { addGoal } from "./actions/goalActions"



class NewGoal extends Component {


  handleChange = (event) => {
      if (event.keyCode === 13) {
        console.log(event.target.value)
        this.props.addGoal(event.target.value)
      }
  }

  // handleEnter = () => {
  //   console.log("value is", event.target.value);
  //   let value = this.handleChange()
  //   return value
  // }


  render() {
    return (
      <div>
        <form>
          <label for="GET-name">Goal:</label>
          <input
            id="GET-name"
            type="text"
            placeholder="Enter a new goal"
            onKeyUp={this.handleChange}
            />
          <input type="submit" value="Save" />
        </form>

        <input
          id="new-goal"
          type="text"
          placeholder="Enter a new goal"
          onKeyUp={this.handleChange}
         />
       <input
         id="goal-submit"
         type="submit"
         value="submit"
         />
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  console.log("state in mapStateToProps is", state)
  return {
    goals: state.goals.goal
  }
}

export default connect(mapStateToProps, {
  addGoal
})(NewGoal)
