import React, { Component } from 'react';

class Notifications extends Component {

  render() {
    return (
      <ul>
        {
          this.props.Notifs.map((notif, index) => {
          return <li key={notif.notice_id}>
              {notif[index].content}
            </li>
            })
        }
      </ul>
    )
  }
}

export default Notifications;