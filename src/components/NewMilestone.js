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
        disabled={!(this.props.milestonesText.length > 1)}
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
        {this.props.milestonesText.map((num, i)=>{
          return (
                  <MuiText
                    key={i}
                    hintText="milestone"
                    floatingLabelText="milestone"
                    text={this.props.milestonesText[i]}
                    handleSubmit={function() {}}
                    handleChange={function(text) { this.props.handleMilestonesInput(text, i) }.bind(this)}
                    />

                  )

        })}
        </Dialog>
      </MuiThemeProvider>
    )
  }
}

export default NewMilestone
