import React, { Component } from 'react'
import { connect } from 'react-redux'

import { checkedStep } from '../actions/goalActions'


const Step = ({ milestone, dispatch }) => {
  return (
    <div>
      {milestone.steps.map((step, index) => {
        return (
          <h3 key={index}>{step.step}
           <input
            className="checkbox"
            type="checkbox"
            onChange={() => dispatch(checkedStep(step, index))}
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
