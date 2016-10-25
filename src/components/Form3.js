import React, {Component} from 'react'

import { Button } from 'react-bootstrap';
import InputBox from './InputBox'



class Form3 extends Component {

  render() {
    return (
      <div>
        <form>
          <h1>Post a Notification</h1>
            <InputBox newTodo
              onSave={this.props.onSave}
              label="goal"
              placeholder="What's your next goal?"
             />
        </form>



      </div>
    )
  }

}

export default Form3;
