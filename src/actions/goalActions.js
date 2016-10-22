import axios from "axios"

export function fetchGoal() {
  return function(dispatch) {
    axios.get("http://rest.learncode.academy/api/test123/tweets")
      .then((response) => {
        dispatch({type: "FETCH_GOALS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_GOALS_REJECTED", payload: err})
      })
  }
}

export function addGoal(goal) {
  return {
    type: 'ADD_GOAL',
    payload: {
      goal
    },
  }
}

export function updateGoal(id, text) {
  return {
    type: 'UPDATE_GOAL',
    payload: {
      id,
      text,
    },
  }
}

export function deleteGoal(id) {
  return { type: 'DELETE_GOAL', payload: id}
}
