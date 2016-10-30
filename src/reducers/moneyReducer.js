const defaultState = {
    group_money: null,
    user_money: null,
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
    }

    return state
}
