import { combineReducers } from "redux"

import user from "./userReducer"
import goal from "./goalReducer"
import milestones from "./milestoneReducer"
import steps from "./stepReducer"
import group from "./groupReducer"
import money from "./moneyReducer"

export default combineReducers({
  user,
  goal,
  milestones,
  steps,
  group,
  money

})
