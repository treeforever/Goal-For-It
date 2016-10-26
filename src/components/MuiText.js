import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './MuiTheme'

class MuiText extends Component {
  state = {
    text: this.props.text || ''
  }

  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleBlur = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }

  render(){
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <TextField
            hintText={this.props.hintText}
            floatingLabelText={this.props.floatingLabelText}
            errorText="This field is required"
            autoFocus="true"
            value={this.state.text}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            onKeyDown={this.handleSubmit}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default MuiText;
