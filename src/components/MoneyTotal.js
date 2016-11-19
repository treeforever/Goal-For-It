import React, { Component } from 'react';



class MoneyTotal extends Component {
  render() {
    return (
      <div id="money-total">
        <audio ref={(elem) => this.audio = elem} id="audio" src="../../sound/coins.mp3" ></audio>
         <img src="../../images/piggy-bank.png" id="piggy-bank" alt="piggy-bank" height="100" width="100" />
         <span className="money-total" onClick={() => {this.audio.play() }}>${this.props.moneyTotal}</span>
      </div>
    )

  }
}

export default MoneyTotal;

// <audio src="../../sound/Cha-Ching.mp3" controls>
// Your browser does not support the audio element.
// </audio>

//     return correctUser
//       ? <div>
//           Your Total: {correctUser.user_money}
//         </div>
//       : null
