export default function reducer(state={
    milestones: [],
    checked: [],
    milestonesText: [""],
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

      case "ADD_MILESTONES_IN_STATE": {
        return {
          ...state,
          newMilestones: state.milestonesText.slice(0, state.milestonesText.length - 1)
        }
      }

      case "ADD_MILESTONES_FULFILLED": {
        return {
          ...state,
          newMilestonesIds: action.payload.data.id,
          milestonesText: [""],
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
          milestonesText: [""],
        }
      }

      case "HANDLE_MILESTONES_INPUT": {
        let newArray = state.milestonesText.slice(0);
        newArray[action.payload.index] = action.payload.text;
        newArray = newArray.filter(function(v) {
          return v !== "";
        });

        if(newArray[newArray.length - 1] !== "") {
          newArray.push("");
        }
        return {...state,
         milestonesText: newArray}
      }

    }

    return state
}
