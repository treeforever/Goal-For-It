import React, {Component} from 'react'

import { Button } from 'react-bootstrap';
import InputBox from './InputBox'
// import 'bootstrap/less/bootstrap.less';



class Form1 extends Component {

  render() {
    return (
      <div>
        <form>
          <h1>Goal</h1>
            <InputBox newTodo
              onSave={this.props.onSave}
              type="goal"
              label="goal"
              placeholder="What's your next goal?"
             />

          <h2>Milestones</h2>
            <InputBox newTodo
              onSave={this.props.onSave}
              type="milestone"
              label="milestone"
              placeholder="Break down your goal to less than 5 milestones"
             />

          <h3>Steps</h3>
            <InputBox newTodo
              onSave={this.props.onSave}
              placeholder="What are the steps to achieve this milestone?"
             />
           <Button>Next</Button>
        </form>



      </div>
    )
  }

}

export default Form1;
