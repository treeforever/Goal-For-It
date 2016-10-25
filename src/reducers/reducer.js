import { combineReducers } from "redux"

import user from "./userReducer"
import goals from "./goalReducer"
import milestones from "./milestoneReducer"
import steps from "./stepReducer"
import group from "./groupReducer"

export default combineReducers({
  user,
  goals,
  milestones,
  steps,
  group

})
