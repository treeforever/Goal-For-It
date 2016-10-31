import React from 'react'
import { connect } from 'react-redux'
import { checkedMile } from '../actions/goalActions'
import { addNotif } from '../actions/groupActions'
import { moneyMilestone } from '../actions/moneyActions'
import Step from './StepIndex'
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


const Milestone = ({ milestones, user, dispatch }) => (
  <div>
    {milestones.map((milestone, index) => {
      const content = (milestone.checked ? `${user} unchecked their milestone: ${milestone.title}` : `${user} completed their milestone: ${milestone.title}`)
      return (
        <div key={index}>
            <h2>{milestone.title}</h2>
            <MuiThemeProvider style={styles.block}>
              <Checkbox
              style={styles.checkbox}
              onCheck={
                () => {
                  dispatch(checkedMile(milestone, index))
                  dispatch(addNotif({type: "notificaiton", content: content}))
                  dispatch(moneyMilestone(milestone.checked))
                  }
                }
              checked={milestone.checked}
              />
            </MuiThemeProvider>
          <Step milestone={milestone} />
        </div>
      )
    })}

  </div>
);


export default connect()(Milestone)
