import React from 'react'
import { connect } from 'react-redux'

import { checkedStep } from '../actions/goalActions'
import { addNotif } from '../actions/groupActions'
import { moneyStep } from '../actions/moneyActions'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Checkbox from 'material-ui/Checkbox';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};



const Step = ({ milestone, user, currentUser, dispatch }) => {
  return (
    <div>
      {milestone.steps.map((step, index) => {
        const content = (step.checked ? `${user} unchecked their step: ${step.step}` : `${user} completed their step: ${step.step}`)
        return (
          <h3 key={index}>{step.step}
          <MuiThemeProvider style={styles.block}>
              <Checkbox
              style={styles.checkbox}
              onCheck={
                () => {
                  dispatch(checkedStep(step, index))
                  dispatch(addNotif({type: "notificaiton", content: content}))
                  dispatch(moneyStep(step.checked))
                  }
                }
              checked={step.checked}
              disabled={(user === currentUser.username ? false : true)}
              />
            </MuiThemeProvider>

        </h3>
        )
      })
      }
    </div>
  );
}

export default connect()(Step)
