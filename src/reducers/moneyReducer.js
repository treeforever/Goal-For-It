const defaultState = {
    groupMoney: 0,
    userMoney: 0,
    challenge: true,
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
        if(action.payload && state.groupMoney != 0) {
          return {
            ...state,
          groupMoney: state.groupMoney - 3,
          userMoney: state.userMoney + 3
          }
        }
      }

      case "MONEY_MILESTONE": {
        if(action.payload && state.groupMoney != 0){
          return {
          groupMoney: state.grouMoney - 2,
          userMoney: state.userMoney + 2
          }
        }
      }

      case "MONEY_STEP": {
        if(action.payload && state.groupMoney != 0){
          return {
            groupMoney: state.groupMoney - 1,
            userMoney: state.userMoney + 1
          }
        }
      }
    }
  return state
}

