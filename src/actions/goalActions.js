import axios from "axios"

//use Promise middleware
export function fetchGoal(goal) {
  const url = `http://localhost:8080/api/goals/${goal}`;
  const request = axios.get(url);
  return {
    type: "FETCH_GOAL",
    payload: request
  };
}

export function fetchGoals(userId) {
  const url = `http://localhost:8080/api/goals/users/${userId}`;
  const request = axios.get(url);
  return {
    type: "FETCH_GOALS",
    payload: request
  };
}

export function addGoal(goal) {
  const url = "http://localhost:8080/api/goals"
  let data = {goal}
  const req = axios.post(url, data);
  return {
    type: 'ADD_GOAL',
    payload: req,
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


export function openAddGoalDialog() {
  return {
    type: 'OPEN_ADD_GOAL_DIALOG',
  };
}

export function closeAddGoalDialog() {
  return {
    type: 'CLOSE_ADD_GOAL_DIALOG',
  };
}

export function handleGoalInput(text) {
  return {
    type: 'HANDLE_GOAL_INPUT',
    payload: text
  };
}


export function checkedGoal(goal) {
  const url = `http://localhost:8080/api/goals/${goal.goal_id}`
  let isChecked = {checked: !goal.goal_checked}
  axios.put(url, isChecked)
  return {
    type: 'COMPLETE_GOAL',
    payload: !goal.goal_checked
  }
}

export function checkedMile(milestone, index) {
  const url = `http://localhost:8080/api/miles/${milestone.id}`
  let isChecked = {checked: !milestone.checked}
  axios.put(url, isChecked)
  return {
    type: 'COMPLETE_MILE',
    payload: {milestone, index}
  }
}

export function checkedStep(step, index) {
  const url = `http://localhost:8080/api/steps/${step.id}`
  let isChecked = {checked: !step.checked}
  axios.put(url, isChecked)
  return {
    type: 'COMPLETE_STEP',
    payload: {step, index}
  }
}
