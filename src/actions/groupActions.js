import axios from "axios"

//use Promise middleware
export function fetchGroup() {
  const url = "http://localhost:8080/api/group"
  const request = axios.get(url)
  return {
    type: "FETCH_GROUP",
    payload: request
  };
}

export function fetchNotifs() {
  const url = "http://localhost:8080/api/group/notif"
  const request = axios.get(url)
  return {
    type: "FETCH_NOTIFS",
    payload: request
  };
}

export function fetchUser(tag) {
  const url = `http://localhost:8080/api/users/${tag}`
  let request = axios.get(url, tag)
  return {
    type: 'FETCH_TAGGED_USER',
    payload: request
  }
}

export function addNotif(notif) {
  const url = "http://localhost:8080/api/group/notif"
  let data = {notif}
  console.log(data)
  let request = axios.post(url, data)
  return {
    type: 'ADD_NOTIF',
    payload: notif
  }
}

