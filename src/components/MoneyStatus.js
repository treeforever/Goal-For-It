import React, { Component } from 'react';
import MoneyPot from './MoneyPot'
import MoneyTotal from './MoneyTotal'


class MoneyStatus extends Component {
  render() {
    return (
      <div id="moneyStatus" >
        <MoneyPot moneyPot={this.props.money.groupMoney}/>
        <MoneyTotal moneyTotal={this.props.money.userMoney}/>
      </div>
    )
  }
}

export default MoneyStatus;
