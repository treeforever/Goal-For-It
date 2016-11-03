import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
import { Link } from "react-router";
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import {grey50} from 'material-ui/styles/colors';

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


const avatars = [
 'images/Dwight.jpeg',
 'images/Michael.jpg',
 'images/Kelly.png',
 '',
];

class GroupList extends Component {

  sendUsername = (member) => {
    if(member.id === 1){
      this.props.fetchFriendGoals(1)
      this.props.resetGoalIndex()

    }else if(member.id === 2){
      this.props.fetchFriendGoals(2)
      this.props.resetGoalIndex()

    }else if(member.id === 3){
      this.props.fetchFriendGoals(3)
      this.props.resetGoalIndex()
    }
  }

  render(){
    return(
      <List style={styles.wrapper} >
        {this.props.group.map( (member, index) => {
          return (
          <ListItem key={index}>
            <Chip
                style={styles.chip}
                onTouchTap={function() { this.sendUsername(member) }.bind(this) }
                backgroundColor={grey50}
              >
              <Avatar src={ avatars[index] } />
              <Link to="/">
                {member.username}
              </Link>
            </Chip>
          </ListItem>
          )
         } )}
      </List>
    )
  }
}


// const mapDispatchToProps = (dispatch) => {
//   //whenver addGoal is called, the result should be passed
//   //to all of reducers
//   return bindActionCreators({
//     fetchGoal
//   }, dispatch)
// }

export default GroupList
