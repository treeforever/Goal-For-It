import React, {Component} from 'react'
import MuiText from "./MuiText"


class Form1 extends Component {
  state = {
    showRow: false,
    inputs: [{
      hintText: 'what are the milestones?',
      floatingLabelText: 'What are the milestones'
    }]
  }

  addRow = (value) => {
    if (value){
      this.setState({
        inputs: [...this.state.inputs, {
          hintText: 'what are the milestones?',
          floatingLabelText: 'What are the milestones'
        }]
      })
    } else {
      return
    }
  }

  render() {
    return (
      <div>
        <MuiText onSave={this.props.onSaveGoal} hintText="be as specific as you can" floatingLabelText="What is your next ambitious goal?"/>
        {
          this.state.inputs.map((elm) => {
            return (
              <article className="milestone">
                <img src="../../images/milestone.jpg" alt="milestone" height="50" width="50"/>
                <MuiText
                  className="milestone-input"
                  onSave={this.props.onSaveMilestones}
                  hintText={elm.hintText}
                  floatingLabelText={elm.floatingLabelText}
                  addRow={this.addRow}
                />
              </article>
            )
          })
        }
      </div>
    )
  }

}

export default Form1;
