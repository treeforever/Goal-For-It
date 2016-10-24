import React from 'react';
import GroupUser from './GroupUser';

// extends Component - class based Component (heavier)
// class GroupList extends Component {

//   render() {
//     return (
//       <ul>
//         {
//         this.props.grouplist.map((groupUser) => (
//           <GroupUser key={groupUser.user_id}
//             grouplist={groupUser.username}
//           />
//           ))
//         }
//       </ul>
//     )
//   }
// }

// (ligher)

// props, props.grouplist --> ({grouplist})
// ES6 destructuring
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