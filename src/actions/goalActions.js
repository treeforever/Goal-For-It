import axios from "axios"

export function fetchGoal() {
  return function(dispatch) {
      axios.get("http://localhost:8080/api/goal")
      .then((response) => {
        console.log("response type is", [response.data][0][0].goal)
        dispatch({type: "FETCH_GOALS_FULFILLED", payload: [response.data][0][0].goal})
      })
      .catch((err) => {
        dispatch({type: "FETCH_GOALS_REJECTED", payload: err})
      })
  }
  // return {
  //   type: "FETCH_GOALS_FULFILLED",
  //   payload: "read a book"
  // }
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
