import React from 'react';
import Notification from './Notification';

// class NotificationList extends Component {

//   render() {
//     return (
//       <ul>
//         {
//         this.props.notifs.map((notif) => (
//         <Notification key={}
//           notification={}
//         />

//         ))
//         }
//       </ul>
//     )
//   }
// }

// export default NotificationList;

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
