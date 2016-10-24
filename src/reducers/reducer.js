import { combineReducers } from "redux"

import user from "./userReducer"
import goals from "./goalReducer"
import group from "./groupReducer"

export default combineReducers({
  user,
  goals,
  group
})