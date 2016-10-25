import React from 'react';
import GroupUser from './GroupUser';

const GroupList = ({group}) => (
   <ul>
    {
      group.map((groupUser, index) => (
      <GroupUser key={index}
        grouplist={groupUser.username}
      />
      ))
    }
  </ul>
)

export default GroupList


/////
// >= 1 group

//Rock and Role
//Jazz

// this.props.group.map(group => {
//   <GroupList grouplist={group} />
//   <h1>{group.name }</h1>
// })

// this.props.group[0] //Rock and Roll
// this.props.group[1]
// this.props.group[2]