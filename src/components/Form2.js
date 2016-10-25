import React, {Component} from 'react'

import { Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import InputBox from './InputBox'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class Form2 extends Component {

  render() {
    return (
      <div>
        <form>
          <h2>Steps</h2>
          <FormGroup controlId="formControlsSelect">
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select milestone</option>
              <option value="other">...</option>
            </FormControl>
          </FormGroup>

          <InputBox newTodo
            onSave={this.props.onSaveSteps}
            label="step"
            placeholder="What are the steps to achieve this milestone?"
           />
          <Button>done</Button>
        </form>
      </div>
    )
  }

}

export default Form2;
