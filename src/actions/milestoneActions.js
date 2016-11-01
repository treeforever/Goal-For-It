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

export function addMilestones(milestones, goalId) {
  const url = "http://localhost:8080/api/miles"
  let truncatedMilestones = milestones.filter(function(m){return m.length !== 0})
  let data = {newMilestones: truncatedMilestones, goal_id: goalId}
  const res = axios.post(url, data)
  return {
    type: 'ADD_MILESTONES',
    payload: res
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

export function openAddMilestonesDialog() {
  return {
    type: 'OPEN_ADD_MILESTONES_DIALOG',
  };
}

export function closeAddMilestonesDialog() {
  return {
    type: 'CLOSE_ADD_MILESTONES_DIALOG',
  };
}


export function addMilestoneInState() {
  return {
    type: 'ADD_MILESTONES_IN_STATE',
  };
}


export function handleMilestonesInput(text, index) {
  return {
    type: 'HANDLE_MILESTONES_INPUT',
    payload: {
      text,
      index,
    }
  };
}
