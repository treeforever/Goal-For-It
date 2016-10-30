import React from 'react';
import GroupUser from './GroupUser';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    'justify-content': "center"
  },
};

const GroupList = ({ group, click }) => (
   <ul style={styles.wrapper} >
    {
      group.map((groupUser, index) => (
      <GroupUser
        key={index}
        grouplist={groupUser.username}
        handleTouchTap={click}
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