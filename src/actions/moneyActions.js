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

export function addGroupMoney(newMoneyInput, groupMoney) {
  const url = 'http://localhost:8080/api/group'
  let data = Number(newMoneyInput) + Number(groupMoney)
  const req = axios.put(url, {data});
  return {
    type: "ADD_GROUP_MONEY",
    payload: req
  };
}


// export function updateGroupMoneyInDB(money) {
//   return {
//     type: "UPDATE_GROUP_MONEY_IN_DB",
//   }
// }


export function fetchMoney(userId) {
  const url = `http://localhost:8080/api/users/${userId}`
  const req = axios.get(url)
  return {
    type: "FETCH_MONEY",
    payload: req
  }
}

export function moneyGoal(userId, completed, groupMoneyValue, userMoneyValue) {
  console.log('MONEY REDUCER', completed)
  const url = `http://localhost:8080/api/users/${userId}`
  if(!completed){
    let money = {groupMoney: groupMoneyValue - 10, userMoney: userMoneyValue + 10}
    axios.put(url, money)
  }
  return {
    type: "MONEY_GOAL",
    payload: !completed
  }
}

export function moneyMilestone(userId, completed, groupMoneyValue, userMoneyValue) {
  console.log('groupMoneyValue', groupMoneyValue)
  console.log('USERMoneyValue', userMoneyValue)
  const url = `http://localhost:8080/api/users/${userId}`
  if(!completed){
    let money = {groupMoney: groupMoneyValue - 5, userMoney: userMoneyValue + 5}
    axios.put(url, money)
  }
  return {
    type: "MONEY_MILESTONE",
    payload: !completed
  }
}

export function moneyStep(userId, completed, groupMoneyValue, userMoneyValue) {
  console.log('groupMoneyValue', groupMoneyValue)
  console.log('USERMoneyValue', userMoneyValue)
  const url = `http://localhost:8080/api/users/${userId}`
  if(!completed){
    let money = {groupMoney: groupMoneyValue - 1, userMoney: userMoneyValue + 1}
    axios.put(url, money)
  }
  return {
    type: "MONEY_STEP",
    payload: !completed
  }
}
