import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './MuiTheme'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import MuiText from './MuiText'

import NewGoal from './NewGoal'


/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
class Modal extends Component {
  state = {
    open: false,
    nextDisabled: true,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  activateNext = () => {
    this.setState({nextDisabled: false})
  }

  handleSubmit = () => {
    this.props.onSave()

  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Next"
        primary={true}
        disabled={this.state.nextDisabled}
        onTouchTap={this.handleClose}
        onClick={this.handleSubmit}
      />,
    ];

    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <RaisedButton label="Modal Dialog" onTouchTap={this.handleOpen} />
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Dialog
            title="Dialog With Actions"
            actions={actions}
            modal={true}
            open={this.state.open}
          >
          <MuiText
            hintText={this.props.hintText}
            floatingLabelText={this.props.floatingLabelText}
            activateNext={this.activateNext}
            />
          </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Modal
