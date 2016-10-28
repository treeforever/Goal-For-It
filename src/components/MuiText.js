import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './MuiTheme'

class MuiText extends Component {
  state = {
    text: '',
    limit: 1
  }

  handleSubmit = e => {
    const text = e.target.value.trim()
    this.props.onSave(text)
    this.setState({ text: '' })

  }

  handleChange = e => {
    // if (this.state.limit){
      // this.props.addRow(e.target.value)
      // this.setState({ limit: 0 })
    this.props.handleChange(e.target.value)
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
          />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default MuiText;
