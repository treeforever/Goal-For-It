import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchGoal } from "../actions/goalActions"
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

  sendUsername = (member) => {
    if(member.id === 1){
      this.props.fetchGoal(1)
      this.props.fetchUser(1)

    }else if(member.id === 2){
      this.props.fetchGoal(2)
      this.props.fetchUser(2)

    }else if(member.id === 3){
      this.props.fetchGoal(3)
      this.props.fetchUser(3)

    }
  }

  render(){
    console.log(this.props.group)
    return(
      <ul style={styles.wrapper} >
        {this.props.group.map( (member) => {
          return (
              <Chip
                style={styles.chip}
                onTouchTap={function() { this.sendUsername(member) }.bind(this) }
              >
            <Link to="/">
                {member.username}
            </Link>
              </Chip>)


         } )}


      </ul>
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


