import React, {Component} from 'react';
import { Link } from "react-router";
const Menu = require('react-burger-menu').slide;

class Sidemenu extends Component {
  render() {

    return (
      <Menu isOpen={ false }>
          <Link to="/" className="menu-item">Goal: Become a developer</Link>
          <Link to="group" className="menu-item">Group</Link>
      </Menu>

    )
  }
}


export default Sidemenu;
