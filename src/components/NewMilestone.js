import React, { Component } from 'react'
import MuiText from './MuiText'

const NewMilestone = ({activateNext}) => {
  return (
    <MuiText
      hintText="break it down to several meaningful milestones"
      floatingLabelText="What could be the milestones of your goal?"
      activateNext={activateNext}
      />
  )
}

export default NewMilestone
