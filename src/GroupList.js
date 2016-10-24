import React, { Component } from 'react';
import GroupUser from './GroupUser';

class GroupList extends Component {

  render() {
    return (
      <ul>
        {
        this.props.groupList.map((groupUser) => (
          <GroupUser key={groupUser.user_id}
            groupList={groupUser.username}
          />
          ))
        }
      </ul>
    )
  }
}

export default GroupList;