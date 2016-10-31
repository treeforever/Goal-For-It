import React, { Component } from 'react';


class MoneyStatus extends Component {
  render() {
    return (
      <div>
        Your Total: {this.props.moneyTotal}
      </div>
    )
  }
}

export default MoneyStatus;