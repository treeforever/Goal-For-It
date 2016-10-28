import axios from "axios"

//use Promise middleware
export function fetchSteps() {
  const url = "http://localhost:8080/api/goal/1";
  const request = axios.get(url);
  console.log("request", request);
  return {
    type: "FETCH_GOALS",
    payload: request
  };
}

export function addSteps(steps) {
  return {
    type: 'ADD_STEPS',
    payload: {
      steps
    }
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
export function handleStepsInput(text) {
  return {
    type: 'HANDLE_STEPS_INPUT',
    payload: text
  };
}
