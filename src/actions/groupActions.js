import axios from "axios";

//use Promise middleware
export function fetchGroup() {
  const url = "http://localhost:8080/api/group";
  const request = axios.get(url);
  console.log("fetchGroup", request);
  return {
    type: "FETCH_GROUP",
    payload: request
  };
}

export function fetchNotifs() {
  const url = "http://localhost:8080/api/group/notif";
  const request = axios.get(url);
  console.log("fetchNotifs", request);
  return {
    type: "FETCH_NOTIFS",
    payload: request
  };
}

export function addNotif(notif) {
  return {
    type: 'ADD_NOTIF',
    payload: {
      notif
    }
  }
}