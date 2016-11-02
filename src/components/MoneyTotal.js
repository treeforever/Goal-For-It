import React, { Component } from 'react';


class MoneyTotal extends Component {
  render() {
    return (
      <div>
        Your Total: ${this.props.moneyTotal}
      </div>
    )

  }
}


export default MoneyTotal;


    // return correctUser
    //   ? <div>
    //       Your Total: {correctUser.user_money}
    //     </div>
    //   : null