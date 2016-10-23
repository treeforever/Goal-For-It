import axios from "axios"

//usual way for ajex calls
// export function fetchGoal() {
//   return function(dispatch) {
//       axios.get("http://localhost:8080/api/goal")
//       .then((response) => {
//         //todo: refactor
//         console.log("big chunk from server", [response.data][0])
//         dispatch({type: "FETCH_GOALS_FULFILLED",
//                   payload: {
//                     goal: [response.data][0][0].goal,
//                   }
//                 })
//       })
//       .catch((err) => {
//         dispatch({type: "FETCH_GOALS_REJECTED", payload: err})
//       })
//   }
// }

//use Promise middleware
export function fetchGoal() {
  const url = "http://localhost:8080/api/goal";
  const request = axios.get(url);
  console.log("request", request);
  return {
    type: "FETCH_GOALS",
    payload: request
  };
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
