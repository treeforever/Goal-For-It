import React, { Component } from 'react';
import Step from './Step'


class Milestone extends Component {
  render() {



    return (
      <div className="milestones">
        <ul className="milestone">
          {
            //loops though all milestones and lists them
            this.props.ListOfMilestones.map((milestone) => (
              <li key={milestone.milesone_id}>
                {milestone.mile_title}
                <Step />
              </li>
              ))
          }
        </ul>
      </div>
    );
  }
}

export default Milestone;
