import React from 'react';
import Notification from './Notification';

const NotificationList = ({notifs}) => (
   <ul>
    {
      notifs.map((notif, index) => (
        <Notification
          key={index}
          notification={notif.content}
        />
      ))
    }
  </ul>
)

export default NotificationList;
