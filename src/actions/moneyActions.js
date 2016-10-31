import axios from "axios"

//use Promise middleware
export function openPotDialog() {
  return {
    type: "OPEN_POT_DIALOG",
  };
}

export function closePotDialog() {
  return {
    type: "CLOSE_POT_DIALOG",
  };
}

export function handleMoneyInput(text) {
  return {
    type: "HANDLE_MONEY_INPUT",
    payload: text
  };
}

export function addGroupMoney() {
  return {
    type: "ADD_GROUP_MONEY",
  };
}
export function fetchGroupMoney() {
  return {
    type: "FETCH_GROUP_MONEY"
  }
}

export function fetchUserMoney() {
  return {
    type: "FETCH_USER_MONEY"
  }
}

export function moneyGoal(completed) {
  return {
    type: "MONEY_GOAL",
    payload: !completed
  }
}

export function moneyMilestone(completed) {
  return {
    type: "MONEY_MILESTONE",
    payload: !completed

  }
}

export function moneyStep(completed) {
  return {
    type: "MONEY_STEP",
    payload: !completed
  }
}
