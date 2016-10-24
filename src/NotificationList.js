import React, { Component } from 'react';
import Notification from './Notification';

class NotificationList extends Component {

  render() {
    return (
      <ul>
        {
        this.props.notifs.map((notif) => (
        <Notification key={notif.notice_id}
          notification={notif.content}
        />

        ))
        }
      </ul>
    )
  }
}

export default NotificationList;