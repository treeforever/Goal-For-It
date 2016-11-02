import React, { Component } from 'react';


class MoneyPot extends Component {
  render() {
    return (
      <div>
        Money Pot: ${this.props.moneyPot}
      </div>
    )
  }
}

export default MoneyPot;