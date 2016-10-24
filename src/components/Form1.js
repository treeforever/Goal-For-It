import React, {Component} from 'react'

import { Button } from 'react-bootstrap';
import InputBox from './InputBox'



class Form1 extends Component {

  render() {
    return (
      <div>
        <form>
          <h1>Goal</h1>
            <InputBox newTodo
              onSave={this.props.onSave}            
              label="goal"
              placeholder="What's your next goal?"
             />

          <h2>Milestones</h2>
            <InputBox newTodo
              onSave={this.props.onSave}
              label="milestone"
              placeholder="Break down your goal to less than 5 milestones"
             />
           <Button>Next</Button>
        </form>



      </div>
    )
  }

}

export default Form1;
