import React, {Component} from 'react'
import { connect } from "react-redux"

import { addGoal } from "./actions/goalActions"



class NewGoal extends Component {


  handleSave = (event) => {
    if (event.keyCode === 13) {
      console.log(event.target.value)
      addGoal(event.target.value)
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
            onKeyUp={this.handleSave}
            />
          <input type="submit" value="Save" />
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

export default connect(mapStateToProps)(NewGoal)
