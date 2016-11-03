import React, { Component } from 'react';
import { connect } from 'react-redux'
import { checkedMile } from '../actions/goalActions'
import { addNotif } from '../actions/groupActions'
import { moneyMilestone } from '../actions/moneyActions'
import Step from './StepIndex'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Checkbox from 'material-ui/Checkbox';


const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class Milestone extends Component {
  render() {
    var { milestones, user, currentUser, dispatch, money } = this.props;
    return (<div>
      {milestones.map((milestone, index) => {
        const content = (milestone.checked ? `${user} unchecked their milestone: ${milestone.title}` : `${user} completed their milestone: ${milestone.title}`)
        return (
          <div key={index} className="milestone-box">
              <h2 className="milestone-title" style={{marginBottom: `40px`}}>
                <MuiThemeProvider style={styles.block}>
                  <Checkbox
                    className='checkbox'
                    style={styles.checkbox}
                    onCheck={
                      () => {
                        dispatch(checkedMile(milestone, index))
                        dispatch(addNotif({type: "notificaiton", content: content}))
                        dispatch(moneyMilestone(currentUser.userId, milestone.checked, money.groupMoney, money.userMoney))
                        if(!milestone.checked){
                          this.audio.pause()
                          this.audio.currentTime = 0
                          this.audio.play()
                        }
                      }
                    }
                    checked={milestone.checked}
                    disabled={(user === currentUser.username ? false : true)}
                  />
                </MuiThemeProvider>
                <img src="../../images/milestone.jpg" alt="milestone" height="50" width="50"/>
                {milestone.title}
              </h2>
              <audio ref={(elem) => this.audio = elem} id="audio" src="../../sound/Cha-Ching.mp3" ></audio>
            <Step milestone={milestone} currentUser={currentUser} user={user} money={money}/>
          </div>
        )
      })}

    </div>);
  }
}

// const Milestone = ({ milestones, user, currentUser, dispatch, money }) => (
//   <div>
//     {milestones.map((milestone, index) => {
//       const content = (milestone.checked ? `${user} unchecked their milestone: ${milestone.title}` : `${user} completed their milestone: ${milestone.title}`)
//       return (
//         <div key={index}>
//             <h2>{milestone.title}</h2>
//             <audio ref={(elem) => this.audio = elem} id="audio" src="../../sound/coins.mp3" ></audio>
//             <MuiThemeProvider style={styles.block}>
//               <Checkbox
//               style={styles.checkbox}
//               onCheck={
//                 (() => {
//                   dispatch(checkedMile(milestone, index))
//                   dispatch(addNotif({type: "notificaiton", content: content}))
//                   dispatch(moneyMilestone(currentUser.userId, milestone.checked, money.groupMoney, money.userMoney))
//                   this.audio.play()
//                 }).bind(this)
//                 }
//               checked={milestone.checked}
//               disabled={(user === currentUser.username ? false : true)}
//               />
//             </MuiThemeProvider>
//           <Step milestone={milestone} currentUser={currentUser} user={user} money={money}/>
//         </div>
//       )
//     })}
//
//   </div>
// );


export default connect()(Milestone)
