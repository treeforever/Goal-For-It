import { combineReducers } from "redux"

import user from "./userReducer"
import goals from "./goalReducer"

export default combineReducers({
  user,
  goals,
})
