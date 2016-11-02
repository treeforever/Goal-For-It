import React, { Component } from 'react';
import { Link } from "react-router";


class MoneyPot extends Component {
  render() {
    return (
      <div id="money-pot"><Link to="group">
      <span id="group-money">Group ${this.props.moneyPot}</span>
      </Link>
      </div>
    )
  }
}

export default MoneyPot;

// import EditorAttachMoney from 'material-ui/svg-icons/editor/attach-money'
// <EditorAttachMoney />
