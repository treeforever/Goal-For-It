import React, { Component } from 'react'
import { connect } from 'react-redux'

import { checkedStep } from '../actions/goalActions'
import { addNotif } from '../actions/groupActions'
import { moneyStep } from '../actions/moneyActions'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class Step extends Component {
  render() {
    var { milestone, user, currentUser, dispatch, money } = this.props;
    return(
      <div>
      {milestone.steps.map((step, index) => {
        const content = (step.checked ? `${user} unchecked their step: ${step.step}` : `${user} completed their step: ${step.step}`)
        return (
          <div key={index} className="step-box">
            <h3 key={index} className="step-title">
              <span className="step-title"><span className="step-index">{index + 1}.</span> {step.step}</span>
            </h3>
          <audio ref={(elem) => this.audio = elem} id="audio" src="../../sound/Cha-Ching.mp3" ></audio>
          <MuiThemeProvider style={styles.block}>
            <Checkbox
              className='checkbox'
              style={{...styles.checkbox, top: `-47px`}}
              onCheck={
                () => {
                  dispatch(checkedStep(step, index))
                  dispatch(addNotif({type: "notificaiton", content: content}))
                  dispatch(moneyStep(currentUser.userId, step.checked, money.groupMoney, money.userMoney))
                  if(!step.checked){
                      this.audio.pause()
                      this.audio.currentTime = 0
                      this.audio.play()
                    }
                  }
                }
              checked={step.checked}
              disabled={(user === currentUser.username ? false : true)}
            />
          </MuiThemeProvider>


        </div>
        )
      })
      }

    </div>
  );
  }
}

// const Step = ({ milestone, user, currentUser, dispatch, money }) => {
//   return (
//     <div>
//       {milestone.steps.map((step, index) => {
//         const content = (step.checked ? `${user} unchecked their step: ${step.step}` : `${user} completed their step: ${step.step}`)
//         return (
//           <h3 key={index}>{step.step}
//           <audio ref={(elem) => this.audio = elem} id="audio" src="../../sound/Cha-Ching.mp3" ></audio>
//           <MuiThemeProvider style={styles.block}>
//               <Checkbox
//               style={styles.checkbox}
//               onCheck={
//                 () => {
//                   dispatch(checkedStep(step, index))
//                   dispatch(addNotif({type: "notificaiton", content: content}))
//                   dispatch(moneyStep(currentUser.userId, step.checked, money.groupMoney, money.userMoney))
//                   if(!step.checked){
//                       this.audio.pause()
//                       this.audio.currentTime = 0
//                       this.audio.play()
//                     }
//                   }
//                 }
//               checked={step.checked}
//               disabled={(user === currentUser.username ? false : true)}
//               />
//             </MuiThemeProvider>

//         </h3>
//         )
//       })
//       }
//     </div>
//   );
// }

export default connect()(Step)
