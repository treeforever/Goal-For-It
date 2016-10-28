import React, { Component } from 'react'
import { connect } from 'react-redux'

import { checkedStep } from '../actions/goalActions'
import { addNotif } from '../actions/groupActions'


const Step = ({ milestone, user, dispatch }) => {
  return (
    <div>
      {milestone.steps.map((step, index) => {
        const content = (step.checked ? `${user} unchecked their step: ${step.step}` : `${user} completed their step: ${step.step}`)
        return (
          <h3 key={index}>{step.step}
           <input
            className="checkbox"
            type="checkbox"
            onChange={
             () => {
                dispatch(checkedStep(step, index))
                dispatch(addNotif({type: "notificaiton", content: content}))
              }
            }
            checked={step.checked}
          />
        </h3>
        )
      })
      }
    </div>
  );
}

export default connect()(Step)
