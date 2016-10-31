const defaultState = {
    group_money: 500,
    user_money: 100,
    error: null
  };

export default function reducer(state = defaultState, action) {
    switch (action.type) {
      case "OPEN_POT_DIALOG": {
        return {
          ...state,
          openPotDialog: {},
        }
      }

      case "CLOSE_POT_DIALOG": {
        return {
          ...state,
          openStepsDialog: null,
          stepRows: ['one row'],
          stepText: '',
          stepsText:[],
        }
      }

      case "FETCH_GROUP_MONEY_FULFILLED": {
        return {
          ...state
        }
      }

      case "MONEY_GOAL": {
        console.log('MONEY GOAL', action.payload)
        return {
          ...state,
          group_money: state.group_money - 3,
          user_money: state.user_money + 3
        }
      }

      case "MONEY_MILESTONE": {
        console.log("MONEY MILESTONE", action.payload)
        return {
          group_money: state.group_money - 2,
          user_money: state.user_money + 2

        }
      }

      case "MONEY_STEP": {
        console.log("MONEY STEP", action.payload)
        return {
          group_money: state.group_money - 1,
          user_money: state.user_money + 1
        }
      }
    }

    return state
}
