const defaultState = {
    groupMoney: 0,
    userMoney: 0,
    error: null
  };

export default function reducer(state = defaultState, action) {
    switch (action.type) {
      case "OPEN_POT_DIALOG": {
        return {
          ...state,
          potDialog: {},
        }
      }

      case "CLOSE_POT_DIALOG": {
        return {
          ...state,
          potDialog: null,
          newMoneyInput: '',
        }
      }

      case "HANDLE_MONEY_INPUT": {
        return {
          ...state,
          newMoneyInput: action.payload
        }
      }

      case "ADD_GROUP_MONEY": {
        let newMoney = Number(state.newMoneyInput)
        return {
          ...state,
          groupMoney: state.groupMoney + newMoney,
        }
      }

      case "FETCH_GROUP_MONEY_FULFILLED": {
        return {
          ...state
        }
      }

      case "MONEY_GOAL": {
        console.log("MONEY GOAL", state.groupMoney)
        return {
          ...state,
          groupMoney: state.groupMoney - 3,
          userMoney: state.userMoney + 3
        }
      }

      case "MONEY_MILESTONE": {
        console.log("MONEY MILESTONE", state.grouMoney)
        return {
          groupMoney: state.grouMoney - 2,
          userMoney: state.userMoney + 2

        }
      }

      case "MONEY_STEP": {
        console.log("MONEY STEP", state.groupMoney)
        return {
          groupMoney: state.groupMoney - 1,
          userMoney: state.userMoney + 1
        }
      }
    }

    return state
}
