export default function reducer(state={
    milestones: [],
    checked: [],
    milestoneRows: ['one row'],
    milestoneText: '',
    milestonesText: [],
    newMilestones: [],
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
      case "ADD_MILESTONES_FULFILLED": {
        return {
          ...state,
          newMilestonesIds: action.payload.data.id,
          milestoneText: '',
          milestonesText: [],
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


      case "OPEN_ADD_MILESTONES_DIALOG": {
        return {
          ...state,
          openMilestonesDialog: {},
        }
      }

      case "CLOSE_ADD_MILESTONES_DIALOG": {
        return {
          ...state,
          openMilestonesDialog: null,
          milestoneRows: ['one row'],
          milestoneText: '',
          milestonesText: [],
        }
      }

      case "HANDLE_MILESTONE_INPUT": {
        return {
          ...state,
          milestoneText: action.payload
        }
      }

      case "HANDLE_MILESTONES_INPUT": {
        return {
          ...state,
          milestonesText: [...state.milestonesText, state.milestoneText],
          newMilestones: [...state.milestonesText, state.milestoneText]
        }
      }

      case "ADD_MILESTONE_ROW": {
        return {
          ...state,
          milestoneRows: [...state.milestoneRows, action.payload]
        }
      }
    }

    return state
}
