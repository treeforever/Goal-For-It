import React, { Component } from 'react'
import { FlatButton, Dialog } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import muiTheme from '../components/MuiTheme'
import MuiText from '../components/MuiText'

class NewMilestone extends Component {
  render(){
    const milestonesActions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => { this.props.closeAddMilestonesDialog() }}
        />,
      <FlatButton
        label="Next"
        primary={true}
        disabled={!this.props.milestoneText}
        onTouchTap={() => { this.props.nextButtonActionsOnMilestones() }}
        />,
    ]
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Dialog
          title="Add New milestones"
          actions={milestonesActions}
          modal={true}
          open={!!this.props.openMilestonesDialog}
        >
        {this.props.milestoneRows.map((num, i)=>{
          return (
                  <MuiText
                    hintText="milestone"
                    floatingLabelText="milestone"
                    text={this.props.milestonesText[i]}
                    handleChange={this.props.handleMilestoneInput}
                    handleSubmit={this.props.handleMilestonesInput}
                    addRow={this.props.addMilestoneRow}
                    />

                  )

        })}
        </Dialog>
      </MuiThemeProvider>
    )
  }
}

export default NewMilestone
