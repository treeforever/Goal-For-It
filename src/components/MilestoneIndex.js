import React from 'react'
import { connect } from 'react-redux'
import { checkedMile } from '../actions/goalActions'
import { addNotif } from '../actions/groupActions'
import Step from './StepIndex'

const Milestone = ({ milestones, user, dispatch }) => (
  <div>
    {milestones.map((milestone, index) => {
      const content = (milestone.checked ? `${user} unchecked their milestone: ${milestone.title}` : `${user} completed their milestone: ${milestone.title}`)
      return (
        <div key={index}>
          <h2>{milestone.title}
             <input
              className="checkbox"
              type="checkbox"
              onChange={
                () => {
                  dispatch(checkedMile(milestone, index))
                  dispatch(addNotif({type: "notificaiton", content: content}))
                  }
              }
              checked={milestone.checked}
            />
          </h2>
          <Step milestone={milestone} />
        </div>
      )
    })}

  </div>
);


export default connect()(Milestone)
