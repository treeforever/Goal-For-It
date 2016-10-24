export default function reducer(state={
    user: {
      id: null,
      name: null
    },
    group: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_USER": {
        return {...state, fetching: true}
        break;
      }
      case "FETCH_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload}
        break;
      }
      case "FETCH_USER_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.payload,
        }
        break;
      }
      case "FETCH_GROUP": {
        return {...state, fetching: true}
        break;
      }
      case "FETCH_GROUP_REJECTED": {
        return {...state, fetching: false, error: action.payload}
        break;
      }
      case "FETCH_GROUP_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          group: action.payload.data,
        }
        break;
      }
      case "SET_USER_NAME": {
        return {
          ...state,
          user: {...state.user, name: action.payload},
        }
        break;
      }
    }

    return state
}
