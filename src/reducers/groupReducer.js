export default function reducer(state={
    group: [{name: ''}],
    notifs: [],
    tag: [],
    error: null,
  }, action) {

//state argument is not application state, only the state this reducer is
// responsible for
    switch (action.type) {
      case "FETCH_GROUP_REJECTED": {
        return {...state, error: action.payload}
        break;
      }
      case "FETCH_GROUP_FULFILLED": {
        return {
          ...state,
          group: action.payload.data,
        }
        break;
      }
      case "FETCH_NOTIFS_REJECTED": {
        return {...state, error: action.payload}
        break;
      }
      case "FETCH_NOTIFS_FULFILLED": {
        return {
          ...state,
          notifs: action.payload.data,
        }
        break;
      }
      case "ADD_NOTIF": {
        return {
          ...state,
          notifs: [action.payload, ...state.notifs]
        }
        break;
      }
      case "FETCH_TAGGED_USER_REJECTED": {
        return {...state, error: action.payload}
        break;
      }
      case "FETCH_TAGGED_USER_FULFILLED": {
        if(action.payload.data === ""){
          return {
            ...state,
          }
          break;
        }else{
          return {
            ...state,
            tag: [...state.tag, action.payload.data]
          }
          break;
        }
      }

    }

    return state
}
