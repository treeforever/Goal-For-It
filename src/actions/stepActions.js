import axios from "axios"

//use Promise middleware
export function fetchSteps() {
  const url = "http://localhost:8080/api/goal/1";
  const request = axios.get(url);
  return {
    type: "FETCH_GOALS",
    payload: request
  };
}

export function addSteps(steps, milestoneIndex, newMilestones, milestoneIds) {
  const url = "http://localhost:8080/api/steps"
  let truncatedSteps = steps.filter((s) => {return s !== ''})
  let newSteps = []
  truncatedSteps.map((step, i) => {
    newSteps[i] = {}
    newSteps[i].step = steps[i]
    newSteps[i].milestone_id = milestoneIds[milestoneIndex[i]]
  })
  console.log('newSteps are', newSteps)
  const res = axios.post(url, newSteps)
  return {
    type: 'ADD_STEPS',
    payload: res
  }
}

export function updateSteps(id, text) {
  return {
    type: 'UPDATE_STEPS',
    payload: {
      id,
      text,
    },
  }
}

export function deleteSteps(id) {
  return { type: 'DELETE_STEPS', payload: id}
}

export function openAddStepsDialog() {
  return {
    type: 'OPEN_ADD_STEPS_DIALOG',
  };
}

export function closeAddStepsDialog() {
  return {
    type: 'CLOSE_ADD_STEPS_DIALOG',
  };
}

export function handleStepsInput(text, index) {
  return {
    type: 'HANDLE_STEPS_INPUT',
    payload: {
      text,
      index,
    }
  }
}

export function selectMilestone(index) {
  return {
    type: 'SELECT_MILESTONE',
    payload: index
  };
}
