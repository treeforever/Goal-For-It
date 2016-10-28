import React, { Component } from 'react'
import MuiText from './MuiText'

const NewGoal = ({activateNext}) => {
  return (
    <MuiText
      hintText="be as ambitious as you want"
      floatingLabelText="What is your next ambitious goal?"
      activateNext={activateNext}
      />
  )
}

export default NewGoal
