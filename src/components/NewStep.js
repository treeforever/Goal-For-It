import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { FlatButton, Dialog, SelectField, MenuItem } from 'material-ui'

import injectTapEventPlugin from 'react-tap-event-plugin'

import muiTheme from '../components/MuiTheme'
import MuiText from '../components/MuiText'

class NewStep extends Component {
  render(){
    const stepsActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => { this.props.closeAddStepsDialog() }}
      />,
      <FlatButton
        label="Next"
        primary={true}
        disabled={!this.props.stepsText}
        onTouchTap={() => { this.props.nextButtonActionsOnSteps() }}
      />,
    ]
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Dialog
          title="Add New steps"
          actions={stepsActions}
          modal={true}
          open={!!this.props.openStepsDialog}
        >

      <MuiThemeProvider muiTheme={muiTheme}>
        <SelectField
          floatingLabelText="Milestone"
          value={0}
          onChange={this.props.selectMilestone}
        >
        {this.props.newMilestones.map((m, i) => {
          return (
            <MenuItem value={i} primaryText={m} />
          )
        })}
        </SelectField>
      </MuiThemeProvider>

        <MuiText
          hintText="step"
          floatingLabelText="step"
          text={this.props.stepsText}
          handleChange={this.props.handleStepsInput}
          addRow={this.props.addStepRow}
          />
        </Dialog>
      </MuiThemeProvider>
    )
  }
}

export default NewStep
