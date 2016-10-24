import React, { Component } from 'react';
import Step from './Step'


class Milestone extends Component {
  render() {

    return (
      <div className="milestones">
        <ul className="milestone">
          {
            //loops though all milestones and lists them
            this.props.Milestones.map((milestone, index) => (
              <li key={milestone.milestone_id}
                  Steps={this.props}

              >
                {index+1}. {milestone.mile_title}
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
