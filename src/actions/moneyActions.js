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
