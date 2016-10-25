import React from "react"
import { FormGroup, FormControl } from 'react-bootstrap';


const SelectOptions = ({ milestones }) => (
  <FormGroup controlId="formControlsSelect">
    <FormControl componentClass="select" placeholder="select">
      <option value="select">select milestone</option>
      {milestones.map((milestone, index) => {
        return <option value={index + 1}>{milestone.milestones}</option>
      })}
    </FormControl>
  </FormGroup>

)

export default SelectOptions
