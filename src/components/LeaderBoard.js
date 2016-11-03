import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

const avatars = [
 'images/Dwight.jpeg',
 'images/Michael.jpg',
 'images/Kelly.png',
 '',
];

const medals = [
  'images/gold.png',
  'images/silver.png',
  'images/bronze.png'
]


class LeaderBoard extends Component {

  render(){
    return (
      <List className="leaderboard-list">
      {
        this.props.users.map((user, index)=>(
          <div key={index}>
            <ListItem
            primaryText={
              <p style={{color: "black"}}>
              {user.username}
              </p>
            }
            secondaryTextLines={2}
            leftAvatar={<Avatar src={avatars[index]} />}
            rightIcon={<span style={{right: "25px"}}>${user.user_money}<img className="medal" src={medals[index]} height="50" width="25"/></span>}
            />
          </div>
        ))
      }
      </List>
    )
  }
}

export default LeaderBoard;
