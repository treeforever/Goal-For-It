import React, { Component } from 'react';
import { Link } from "react-router";
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
      <Link to="/">{this.props.grouplist}</Link>
      </Chip>
    )
  }
}

export default GroupUser;