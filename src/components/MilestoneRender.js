import React from 'react'
import { connect } from 'react-redux'
import { checkedMile } from '../actions/goalActions'
import Step from './StepRender'


const Milestone = ({ milestones, dispatch }) => {
  return (
    <div>
      {milestones.map((milestone, index) => {
        return (
          <div key={index}>
            <h2>{milestone.title}
               <input
                className="checkbox"
                type="checkbox"
                onChange={() => dispatch(checkedMile(milestone, index))}
                checked={milestone.checked}
              />
            </h2>
            <Step milestone={milestone} />
          </div>
        )
      })}

    </div>
  );
}


export default connect()(Milestone)
// milestones = [ [ ["milestone", 1, "read"], [ ['step', 1, "ya"], ['step', 2, 'hey']] ], ...  ]
