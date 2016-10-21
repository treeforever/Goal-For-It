import React, {Component} from 'react';
import { Link } from "react-router";
const Menu = require('react-burger-menu').slide;

class Sidemenu extends Component {
  render() {
    return (
      <Menu isOpen={ false }>
          <Link to="/">Goal: learn bakery</Link>
          <Link to="group">Group</Link>


      </Menu>

    )
  }
}


export default Sidemenu;
