import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';




class Notification extends Component {

  render() {
    if(this.props.notification.type === "notification"){
      return (
        <div>
          <ListItem
            primaryText={
              <p style={{color: "black"}}>
                {this.props.notification.content}
              </p>
            }
            secondaryText="Notification"
            secondaryTextLines={2}
            leftAvatar={<Avatar src="images/bot.png" />}
            />
            <Divider inset={true} />
        </div>
      )
    }else{
      return(
        <div>
        <ListItem
          primaryText={
            <p style={{color: "black"}}>
              <span style={{color: 'blue'}}>{this.props.sender.username} says: </span> {this.props.notification.content}
            </p>
          }
          secondaryText="Message"
          secondaryTextLines={2}
          leftAvatar={<Avatar src="images/potato.png" />}
          />
          <Divider inset={true} />
        </div>
      )
    }
  }
}

export default Notification;