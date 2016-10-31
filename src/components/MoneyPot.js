import React, { Component } from 'react';


class MoneyStatus extends Component {
  render() {
    return (
      <div>
        Money Pot: {this.props.moneyPot}
      </div>
    )
  }
}

export default MoneyStatus;