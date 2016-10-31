export default function reducer(state={
    user: {
      id: null,
      name: null
    },
    error: null,
  }, action) {

    switch (action.type) {
      case 'POPULATE_USER_INFO': {
        return {
          ...state,
          currentUser: action.payload,
        }
      }
      case "FETCH_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_USER_FULFILLED": {
        return {
          ...state,
          user: action.payload.data
        }
      }
      case "SET_USER_NAME": {
        return {
          ...state,
          user: {...state.user, name: action.payload},
        }
      }
    }

    return state
}
