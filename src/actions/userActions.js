import axios from "axios"

export function fetchUser(userId) {
  const url = `http://localhost:8080/api/users/${userId}`
  const request = axios.get(url);
  return {
    type: "FETCH_USER",
    payload: request
  }
}

export function setUserName(name) {
  return {
    type: 'SET_USER_NAME',
    payload: name,
  }
}

export function populateUserInfo() {
  return {
    type: 'POPULATE_USER_INFO',
    payload: window.currentUser,
  }
}
