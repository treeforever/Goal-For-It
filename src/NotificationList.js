import React from 'react';
import Notification from './Notification';

const NotificationList = ({notifs}) => (
   <ul>
    {
      notifs.map((notif) => {
        return (
            <Notification key={notif.notice_id}
              notification={notif.content}
            />
            )})
    }
  </ul>
)

export default NotificationList;
