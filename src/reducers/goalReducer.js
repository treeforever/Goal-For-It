  const defaultState = {
    goal: { milestones: [] },
    goals: [],
    goalIndex: 0,
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
        return {
          ...state,
          goal: action.payload.data
        }
      }

      case "FETCH_GOALS_FULFILLED": {
        return {
          ...state,
          goals: action.payload.data,
          goal: action.payload.data[state.goalIndex]
        }
      }

      case "FETCH_GOALS_FULFILLED": {
        return {
          ...state,
          goals: action.payload.data,
          goal: action.payload.data[state.goalIndex]
        }
      }

      case "FETCH_FRIEND_GOALS_FULFILLED": {
        return {
          ...state,
          goals: action.payload.data,
          goal: action.payload.data[state.goalIndex],
        }
      }


      case "SHOW_NEXT_GOAL": {
        return {
          ...state,
          goalIndex: Math.abs((state.goalIndex + 1) % state.goals.length)
        }
      }

      case "SHOW_PREVIOUS_GOAL": {
        console.log('goal index', state.goalIndex)
        if (state.goalIndex){
          console.log(1)
          return {
            ...state,
            goalIndex: state.goals.length - Math.abs(( state.goals.length - state.goalIndex + 1) % state.goals.length)
          }
        } else {
          console.log(2)
          return {
            ...state,
            goalIndex: state.goals.length - 1
          }
        }
      }


      case "SHOW_LATEST_GOAL": {
        return {
          ...state,
          goalIndex: state.goals.length - 1
        }
      }


      case "ADD_GOAL_FULFILLED": {
        return {
          ...state,
          newGoal: Object.assign({}, state.newGoal, {id: action.payload.data.id}),
          goalText: ''
        }
      }
      case "UPDATE_GOAL": {
        const { id } = action.payload
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
          goalText: ''
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
          goal: {...state.goal, goal_checked: action.payload}
        }
      }

      case "COMPLETE_MILE": {
        let index = action.payload.index
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
