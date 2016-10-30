import React from 'react';
import Notification from './Notification';

const NotificationList = ({notifs, sender}) => (
   <ul>
    {
      notifs.map((notif, index) => (
        <Notification
          key={index}
          notification={notif}
          sender={sender}
        />
      ))
    }
  </ul>
)

export default NotificationList;
