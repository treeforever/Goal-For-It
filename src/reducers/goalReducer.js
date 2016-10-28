const defaultState = {
    goal: { milestones: [] },
    error: null
  };

export default function reducer(state = defaultState, action) {
//state argument is not application state, only the state this reducer is
// responsible for
    switch (action.type) {
      case "FETCH_GOAL_REJECTED": {
        return {...state, error: action.payload}
      }
      case "FETCH_GOAL_FULFILLED": {
        // console.log("GOALS action payload", action.payload.data)
        return {
          ...state,
          goal: action.payload.data
        }
      }
      case "ADD_GOAL": {
        return {
          ...state,
          goal: action.payload.goal,
          goalText: ''
        }
      }

      case "UPDATE_GOAL": {
        const { id, text } = action.payload
        const newGoals = [...state.goals]
        const goalToUpdate = newGoals.findIndex(goal => goal.id === id)
        newGoals[goalToUpdate] = action.payload;

        return {
          ...state,
          goals: newGoals,
        }
      }
      case "DELETE_GOAL": {
        return {
          ...state,
          goals: state.goals.filter(goal => goal.id !== action.payload),
        }
      }

      case "OPEN_ADD_GOAL_DIALOG": {
        return {
          ...state,
          openGoalDialog: {},
        }
      }

      case "CLOSE_ADD_GOAL_DIALOG": {
        return {
          ...state,
          openGoalDialog: null,
        }
      }

      case "HANDLE_GOAL_INPUT": {
        return {
          ...state,
          goalText: action.payload
        }
      }

      case "COMPLETE_GOAL": {
        return {
          ...state,
          checked: action.payload
        }
      }

      case "COMPLETE_MILE": {
        let index = action.payload

        let completedMilestone = state.goal.milestones[index]

        completedMilestone = {
          ...completedMilestone,
          checked: !completedMilestone.checked
        }

        let milestones = [
          ...state.goal.milestones.slice(0, index),
          completedMilestone,
          ...state.goal.milestones.slice(index + 1, Infinity),
        ]

        return {
          ...state,
          goal: {
            ...state.goal,
            milestones
          }
        }
      }

      case "COMPLETE_STEP":
        const stepIndex = action.payload.index;
        const milestoneID = action.payload.step.milestone_id;

        let selectedMile;
        state.goal.milestones.forEach((milestone, i) => {
          if(milestone.id === milestoneID){
            selectedMile = i;
          }
        })
        const step = state.goal.milestones[selectedMile].steps[stepIndex];
        return {
          ...state,
          goal: {
            ...state.goal,
            milestones: [
              ...state.goal.milestones.slice(0, selectedMile),
              {
                ...state.goal.milestones[selectedMile],
                steps: [
                  ...state.goal.milestones[selectedMile].steps.slice(0, stepIndex),
                  {
                    ...step,
                    checked: !step.checked
                  },
                  ...state.goal.milestones[selectedMile].steps.slice(stepIndex + 1)
                ]
              },
              ...state.goal.milestones.slice(selectedMile + 1, Infinity),
            ]
          }
        };

      default:
        return state;

    }

}

