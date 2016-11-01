import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './MuiTheme'

class MuiText extends Component {

  handleChange = e => {
    this.props.handleChange(e.target.value)
  }

  handleBlur = e => {
    // this.props.handleSubmit(e.target.value)
  }

  render(){
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>

          <TextField
            hintText={this.props.hintText}
            floatingLabelText={this.props.floatingLabelText}
            value={this.props.text}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default MuiText;
