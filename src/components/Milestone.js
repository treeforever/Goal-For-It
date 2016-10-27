import React, { Component } from 'react'
// import Step from './Step'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './MuiTheme'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import MuiText from './MuiText'

const style = {
  marginRight: 20,
};

class Milestone extends Component {

  handleAddStep = () => {
    this.props.addStep(this.props.milestoneIndex)
  }

  render(){
    return (
      <article className="milestone">
        <img src="../../images/milestone.jpg" alt="milestone" height="50" width="50"/>
        <MuiText
          className="milestone-input"
          onSave={this.props.onSaveMilestones}
          hintText={this.props.milestone.hintText}
          floatingLabelText={this.props.milestone.floatingLabelText}
          addRow={this.props.addRow}
        />
        <span className="add-step-button">
          <MuiThemeProvider muiTheme={muiTheme}>
            <FloatingActionButton
              mini={true}
              style={style}
              muiTheme={muiTheme}
              onClick={this.handleAddStep}
              >
              <ContentAdd muiTheme={muiTheme}/>
            </FloatingActionButton>
          </MuiThemeProvider>
        </span>
        {
          this.props.milestone.stepInputs.map((step) => {
            return (
              <p>hey</p>

            )
          })
        }
      </article>
    );
  }
}


export default Milestone
