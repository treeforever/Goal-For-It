const defaultState = {
    groupMoney: 0,
    userMoney: [],
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

      case "FETCH_MONEY_FULFILLED": {
        return {
          ...state,
          groupMoney: action.payload.data[0].amount,
          userMoney: action.payload.data,
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
        if(action.payload && state.groupMoney !== 0){
          return {
          groupMoney: state.grouMoney - 5,
          userMoney: state.userMoney + 5

          }
        }
      }

      case "MONEY_STEP": {
        if(action.payload && state.groupMoney !== 0){
          return {
            groupMoney: state.groupMoney - 1,
            userMoney: state.userMoney + 1
          }
        }
      }
    }
  return state
}
