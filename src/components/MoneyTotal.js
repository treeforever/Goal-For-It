import React, { Component } from 'react';


class MoneyTotal extends Component {
  render() {
    let correctUser = this.props.moneyTotal.find(user =>
      user.username === this.props.currentUser
    )

    if (correctUser)
      console.log(correctUser.user_money)


    return (
      <div>
        {
          correctUser &&
          <div>
            Your Total: {correctUser.user_money}
          </div>
        }
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