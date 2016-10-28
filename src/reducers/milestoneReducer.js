export default function reducer(state={
    milestones: [],
    checked: [],
    error: null,
  }, action) {

//state argument is not application state, only the state this reducer is
// responsible for
    switch (action.type) {
      case "FETCH_MILESTONES_REJECTED": {
        return {...state, error: action.payload}
      }
      case "FETCH_MILESTONES_FULFILLED": {
        return {
          ...state,
          milestones: action.payload.data
        }
      }
      case "ADD_MILESTONES": {
        return {
          ...state,
          milestones: [...state.milestones, action.payload],
        }
      }
      case "UPDATE_MILESTONES": {
        const { id, text } = action.payload
        const newMilestones = [...state.milestones]
        const milestoneToUpdate = newMilestones.findIndex(milestone => milestone.id === id)
        newMilestones[milestoneToUpdate] = action.payload;

        return {
          ...state,
          milestones: newMilestones,
        }
      }
      case "DELETE_MILESTONES": {
        return {
          ...state,
          milestones: state.milestones.filter(milestone => milestone.id !== action.payload),
        }
      }
    }

    return state
}
