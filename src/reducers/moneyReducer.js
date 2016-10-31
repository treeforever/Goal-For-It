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
    }

    return state
}
