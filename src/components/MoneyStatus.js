import React, { Component } from 'react';
import MoneyPot from './MoneyPot'
import MoneyTotal from './MoneyTotal'


class MoneyStatus extends Component {
  render() {
    return (
      <div>
        <MoneyPot />
        <MoneyTotal />
      </div>
    )
  }
}

export default MoneyStatus;