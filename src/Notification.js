import React, { Component } from 'react';

class Notification extends Component {

  render() {
    return (
      <li>{this.props.notification}</li>
    )
  }
}

export default Notification;