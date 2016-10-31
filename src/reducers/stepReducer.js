export default function reducer(state={
    steps: [],
    checked: [],
    stepRows: ['one row'],
    stepText: '',
    stepsText: [],
    newSteps: [],
    error: null,
  }, action) {

//state argument is not application state, only the state this reducer is
// responsible for
    switch (action.type) {
      case "FETCH_STEPS_REJECTED": {
        return {...state, error: action.payload}
      }
      case "FETCH_STEPS_FULFILLED": {
        return {
          ...state,
          steps: action.payload.data
        }
      }
      case "ADD_STEPS": {
        return {
          ...state,
          newSteps: [...state.stepsText],
          stepText: '',
          stepsText:[],
        }
      }
      case "UPDATE_STEPS": {
        const { id } = action.payload
        const newSteps = [...state.steps]
        const stepToUpdate = newSteps.findIndex(step => step.id === id)
        newSteps[stepToUpdate] = action.payload;

        return {
          ...state,
          steps: newSteps,
        }
      }
      case "DELETE_STEPS": {
        return {
          ...state,
          steps: state.steps.filter(step => step.id !== action.payload),
        }
      }

      case "OPEN_ADD_STEPS_DIALOG": {
        return {
          ...state,
          openStepsDialog: {},
        }
      }

      case "CLOSE_ADD_STEPS_DIALOG": {
        return {
          ...state,
          openStepsDialog: null,
          stepRows: ['one row'],
          stepText: '',
          stepsText:[],
        }
      }

      case "HANDLE_STEP_INPUT": {
        return {
          ...state,
          stepText: action.payload
        }
      }


      case "HANDLE_STEPS_INPUT": {
        return {
          ...state,
          stepsText: [...state.stepsText, state.stepText]
        }
      }

      case "SELECT_MILESTONE": {
        return {
          ...state,
          selectedMilestone: action.payload
        }
      }

      case "ADD_STEP_ROW": {
        return {
          ...state,
          stepRows: [...state.stepRows, action.payload]
        }
      }
    }

    return state
}
