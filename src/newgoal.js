import React, {Component} from 'react';

class NewGoal extends Component {

  newGoalEnter = (event) => {
    if (event.keyCode === 13) {
      console.log("I entered!");
    }
  }

  render() {
    return (
      <div>
        <input
          id="new-goal"
          type="text"
          placeholder="Enter a new goal"
          onKeyUp={this.newGoalEnter}
         />

      </div>

    )
  }
}


export default NewGoal;
