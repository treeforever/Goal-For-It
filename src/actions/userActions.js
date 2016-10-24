import axios from "axios"

export function fetchUser() {
  // return function(dispatch) {
    //todo: should changle url to a user api
  //     axios.get("http://localhost:8080/api/goal")
  //     .then((response) => {
  //       //todo: refactor
  //       console.log("big chunk from server", [response.data][0][0])
  //       dispatch({type: "FETCH_GOALS_FULFILLED",
  //                 payload: {
  //                   goal: [response.data][0][0].goal,
  //                   milestones: [response.data][0][0].mile_title
  //                 }
  //
  //               })
  //     })
  //     .catch((err) => {
  //       dispatch({type: "FETCH_GOALS_REJECTED", payload: err})
  //     })
  // // }
  return {
    type: "FETCH_USER",
    payload: {
      name: "Will",
      age: 35,
    }
  }
}

export function fetchGroup() {
  const url ='http://localhost:8080/api/group'
  const request = axios.get(url);
  console.log('request', request)
  return {
    type: 'FETCH_GROUP',
    payload: request
  }
}

export function setUserName(name) {
  return {
    type: 'SET_USER_NAME',
    payload: name,
  }
}

export function setUserAge(age) {
  return {
    type: ''
  }
}
