import axios from "axios"

//use Promise middleware
export function fetchGoal() {
  const url = "http://localhost:8080/api/goals/1";
  const request = axios.get(url);
  console.log("request", request);
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
    },
  }
}

export function deleteGoal(id) {
  return { type: 'DELETE_GOAL', payload: id}
}
