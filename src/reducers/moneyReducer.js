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
        }
      }

      case "HANDLE_MONEY_INPUT": {
        return {
          ...state,
          newMoneyInput: action.payload
        }
      }


      case "ADD_GROUP_MONEY_FULFILLED": {
        let newMoney = Number(state.newMoneyInput)
        return {
          ...state,
          groupMoney: Number(state.groupMoney) + newMoney,
          newMoneyInput: '',
        }
      }

      case "FETCH_MONEY_FULFILLED": {
        return {
          ...state,
          groupMoney: Number(action.payload.data.amount),
          userMoney: Number(action.payload.data.user_money)
        }
      }

      case "MONEY_GOAL": {
        if(action.payload && state.groupMoney !== 0) {
          return {
            ...state,
          groupMoney: state.groupMoney - 10,
          userMoney: state.userMoney + 10
          }
        }
      }

      case "MONEY_MILESTONE": {
        if(action.payload && state.groupMoney !== 0) {
          return {
            ...state,
          groupMoney: state.groupMoney - 5,
          userMoney: state.userMoney + 5
          }
        }
      }

      case "MONEY_STEP": {
        if(action.payload && state.groupMoney !== 0){
          return {
            ...state,
            groupMoney: state.groupMoney - 1,
            userMoney: state.userMoney + 1
          }
        }
      }
    }
  return state
}
