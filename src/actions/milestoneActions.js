import axios from "axios"

//use Promise middleware
export function fetchMilestones() {
  const url = "http://localhost:8080/api/goals/1";
  const request = axios.get(url);
  console.log("request", request);
  return {
    type: "FETCH_GOALS",
    payload: request
  };
}

export function addMilestones(milestones) {
  return {
    type: 'ADD_MILESTONES',
    payload: {
      milestones
    }
  }
}

export function updateMilestones(id, text) {
  return {
    type: 'UPDATE_MILESTONES',
    payload: {
      id,
      text,
    },
  }
}

export function deleteMilestones(id) {
  return { type: 'DELETE_MILESTONES', payload: id}
}