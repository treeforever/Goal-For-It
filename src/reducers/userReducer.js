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
          view_id: action.payload.userId,
        }
      }

      case "FETCH_FRIEND_GOALS_FULFILLED": {
        return {
          ...state,
          view_id: action.payload.data[0].creator_id
        }
      }

      case "FETCH_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }

      case "FETCH_USER_FULFILLED": {
        console.log(action.payload.data)
        return {
          ...state,
          user: action.payload.data,
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
