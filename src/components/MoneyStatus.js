import React, { Component } from 'react';
import MoneyPot from './MoneyPot'
import MoneyTotal from './MoneyTotal'


class MoneyStatus extends Component {
  render() {
    return (
      <div>
        <MoneyPot moneyPot={this.props.money.group_money}/>
        <MoneyTotal moneyTotal={this.props.money.user_money}/>
      </div>
    )
  }
}

export default MoneyStatus;