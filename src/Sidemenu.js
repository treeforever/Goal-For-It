import React, {Component} from 'react';
const Menu = require('react-burger-menu').slide;

class Sidemenu extends Component {
  render() {
    return (
      <Menu isOpen={ false }>
        <a id="goal2" className="menu-item" href="/">Goal: learn bakery</a>
        <a id="group" className="menu-item" href="/">Group</a>
      </Menu>

    )
  }
}


export default Sidemenu;
