import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';


class Notification extends Component {

  render() {
    if(this.props.notification.type === "notification"){
      return (
        <ListItem
          primaryText={
            <p style={{color: "black"}}>
              {this.props.notification.content}
            </p>
          }
          secondaryText="Notification"
          secondaryTextLines={2}
          />
      )
    }else{
      return(
        <ListItem
          primaryText={
            <p style={{color: "black"}}>
              <span style={{color: 'blue'}}>{this.props.sender.username} says: </span> {this.props.notification.content}
            </p>
          }
          secondaryText="Message"
          secondaryTextLines={2}
          />
      )
    }
  }
}

export default Notification;