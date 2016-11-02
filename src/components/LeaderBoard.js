import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';


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
            leftAvatar={<Avatar src="images/bot.png" />}
            rightIcon={<span style={{right: "25px"}}>${user.user_money}</span>}
            />
          </div>
        ))
      }
      </List>
    )
  }
}

export default LeaderBoard;
