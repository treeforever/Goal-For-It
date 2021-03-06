import React, { Component } from 'react';
import { Link } from "react-router";
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};


class GroupUser extends Component {

  render() {
    return (
      <Chip
        style={styles.chip}
        onTouchTap={this.sendUsername}
        value={this.props.key}
      >
      <Avatar src="images/Dwight.jpeg" />
      <Link to="/">{this.props.grouplist}</Link>
      </Chip>
      <Chip
        style={styles.chip}
        onTouchTap={this.sendUsername}
        value={this.props.key}
      >
      <Avatar src="images/Michael.jpg" />

      <Link to="/">{this.props.grouplist}</Link>
      </Chip>
      <Chip
        style={styles.chip}
        onTouchTap={this.sendUsername}
        value={this.props.key}
      >
      <Avatar src="images/Kelly.png" />
      <Link to="/">{this.props.grouplist}</Link>
      </Chip>
    )
  }
}

export default GroupUser;
