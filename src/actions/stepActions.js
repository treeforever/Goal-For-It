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

export function addStep(step) {
  return {
    type: 'ADD_STEP',
    payload: step  
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

export function handleStepsInput(text, index, selectedMilestoneIndex) {
  return {
    type: 'HANDLE_STEPS_INPUT',
    payload: {
      text,
      index,
      selectedMilestoneIndex
    }
  }
}

export function selectMilestone(index) {
  return {
    type: 'SELECT_MILESTONE',
    payload: index
  };
}
