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
        return {
          ...state,
          user: action.payload.data,
        }
      }

      case "CHANGE_VIEWER_TO_CURRENT_USER": {
        return {
          ...state,
          view_id: state.currentUser.userId,
        }
      }
    }

    return state
}
