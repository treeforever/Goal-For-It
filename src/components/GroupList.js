import React, { Component } from 'react';


// import GroupUser from './GroupUser';
import { Link } from "react-router";

import Chip from 'material-ui/Chip';


const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    'justify-content': "center"
  },
};

class GroupList extends Component {

  sendUsername1 = (event) => {
    this.props.fetchGoal(0)
  }

  sendUsername2 = (event) => {
    this.props.fetchGoal(1)
  }

  sendUsername3 = (event) => {
    this.props.fetchGoal(2)
  }

  render(){
    console.log('GROUP', this.props.group)
    return(
      <ul style={styles.wrapper} >
        <Chip
          style={styles.chip}
          onTouchTap={this.sendUsername}
        >
        <Link to="/">{this.props.group[0].username}</Link>
        </Chip>
      </ul>
    )
  }
}


export default GroupList


