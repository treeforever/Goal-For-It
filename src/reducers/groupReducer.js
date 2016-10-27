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
          notifs: [...state.notifs, action.payload],
          tag: []
        }
        break;
      }

    }

    return state
}
