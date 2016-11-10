import React, { Component } from 'react'
import { FlatButton, Dialog } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Step, Stepper, StepLabel} from 'material-ui/Stepper';


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
          title="Add New milestones to make it more measurable"
          actions={milestonesActions}
          modal={true}
          open={!!this.props.openMilestonesDialog}
        >
        <img src="../../images/milestone.jpg" alt="milestone" height="50" width="50"/>
        {this.props.milestonesText.map((num, i)=>{
          return (
                    <MuiText
                      key={i}
                      hintText="milestone"
                      floatingLabelText="milestone"
                      fullWidth={true}
                      text={this.props.milestonesText[i]}
                      handleSubmit={function() {}}
                      handleChange={function(text) { this.props.handleMilestonesInput(text, i) }.bind(this)}
                      />
                  )

        })}
        <div style={{width: '70%', maxWidth: 700, margin: 'auto'}}>
           <Stepper activeStep={1}>
             <Step>
               <StepLabel>Create a goal</StepLabel>
             </Step>
             <Step>
               <StepLabel>Create milestones</StepLabel>
             </Step>
             <Step>
               <StepLabel>Create steps</StepLabel>
             </Step>
           </Stepper>
         </div>
        </Dialog>
      </MuiThemeProvider>
    )
  }
}

export default NewMilestone
