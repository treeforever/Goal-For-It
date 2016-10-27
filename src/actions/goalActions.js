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
export function fetchGoal(goal) {
  const url = `http://localhost:8080/api/goals/${goal}`;
  const request = axios.get(url);
  return {
    type: "FETCH_GOALS",
    payload: request
  };
}



export function addGoal(goal) {
  const url = "http://localhost:8080/api/goals"
  let data = {goal}
  let request = axios.post(url, data)
  return {
    type: 'ADD_GOAL',
    payload: {
      goal
    }
  }
}

export function updateGoal(id, text) {
  return {
    type: 'UPDATE_GOAL',
    payload: {
      id,
      text,
    }
  }
}

export function deleteGoal(id) {
  return { type: 'DELETE_GOAL', payload: id}
}


export function checkedGoal(id) {
  const url = `http://localhost:8080/api/goals/${id}`
  let request = axios.put(url)
  return {
    type: 'COMPLETE_GOAL',
    payload: {
      id
    }
  }
}

