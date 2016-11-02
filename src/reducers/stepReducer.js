export default function reducer(state={
    steps: [],
    checked: [],
    stepsText: [""],
    newSteps: [],
    selectedMilestone: null,
    selectedMilestones: [],
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
          newSteps: state.stepsText
        }
      }

      case "ADD_STEPS_FULFILLED": {
        return {
          ...state,
          newMilestonesIds: action.payload.data.id,
          milestonesText: [""],
          selectedMilestones: [],
          selectedMilestone: null,
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
          stepsText:[""],
          selectedMilestone: null,
          selectedMilestones: [],
        }
      }

      case "HANDLE_STEPS_INPUT": {
        let newArray = state.stepsText.slice(0);
        newArray[action.payload.index] = action.payload.text;
        newArray = newArray.filter(function(v) {
          return v !== "";
        });

        if(newArray[newArray.length - 1] !== "") {
          newArray.push("");
        }
        return {
          ...state,
         stepsText: newArray,
        }
      }

      case "SELECT_MILESTONE": {
        return {
          ...state,
          selectedMilestone: action.payload,
          selectedMilestones: [...state.selectedMilestones, action.payload],
        }
      }
    }

    return state
}
