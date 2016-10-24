import React from 'react';
import Notification from './Notification';

const NotificationList = ({notifs}) => (
   <ul>
    {
      notifs.map((notif) => (
      <Notification key={notif.notice_id}
        notification={notif.content}
      />
      ))
    }
  </ul>
)

export default NotificationList;
