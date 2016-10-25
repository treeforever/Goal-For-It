import from 'react'

var state = { goals: ["a", "b"],
              milestones: []
            }

var action = {
  payload: {}
}
action.payload = {
  data: ["hey"]
}

function foo (){
  return {
    ...state,
    goals: action.payload.data
  }
}
console.log(foo)
