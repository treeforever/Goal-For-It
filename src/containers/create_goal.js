
// import React, {Component} from 'react'
// import { connect } from "react-redux"
// import { bindActionCreators } from 'redux'
//
//
// import Step from "../components/Form2"
// import MuiText from "../components/MuiText"
//
// import { addGoal } from "../actions/goalActions"
// import { addMilestones } from "../actions/milestoneActions"
// import { addSteps } from "../actions/stepActions"
// import { addNotif } from "../actions/groupActions"
//
// class NewGoal extends Component {
//
//   handleSaveGoal = text => {
//       this.props.addGoal(text)
//       this.props.addNotif({type: "notification", content: `user 1 has added a new goal: ${text}`})
//   }
//
//   handleSaveMilestones = text => {
//       this.props.addMilestones(text)
//       this.props.addNotif({type: "notification", content: `user 1 has added a new milestone: ${text}`})
//
//   }
//
//   handleSaveSteps= text => {
//       this.props.addSteps(text)
//       this.props.addNotif({type: "notification", content: `user 1 has added a new step: ${text}`})
//
//   }
//
//
//
//   render() {
//     console.log(this.props.goal.goal)
//     return (
//       <div>
//
//
//
//
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = (store) => {
//   return {
//     goal: store.goal.goal,
//     milestones: store.milestones
//   }
// }
//
// // Anything returned from this function will end up as props
// // on the newGoal container
// const mapDispatchToProps = (dispatch) => {
//   //whenver addGoal is called, the result should be passed
//   //to all of reducers
//   return bindActionCreators({
//                               addGoal: addGoal,
//                               addMilestones: addMilestones,
//                               addSteps: addSteps,
//                               addNotif: addNotif
//                             }, dispatch)
// }
//
// // Promote newGoal from a component to a container - it needs to know
// // about this new dispatch method, addGoal. Make it available as a prop
// export default connect(mapStateToProps, mapDispatchToProps)(NewGoal)
