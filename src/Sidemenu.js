import React, {Component} from 'react';

class Sidemenu extends Component {
  render() {
    return (
      <div className="sidemenu">
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </div>

    )
  }
}


export default Sidemenu;
