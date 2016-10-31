import React from 'react';
import Notification from './Notification';
import Subheader from 'material-ui/Subheader';


const NotificationList = ({notifs, sender}) => (
   <Subheader>Notifications
    {
      notifs.map((notif, index) => (
        <Notification
          key={index}
          notification={notif}
          sender={sender}
        />
      ))
    }

  </Subheader>
)

export default NotificationList;
