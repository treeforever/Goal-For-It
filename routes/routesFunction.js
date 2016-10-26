const _ = require('underscore')

module.exports = {
  function constructGoalKeys(data){
    let keys = _.keys(data)
    let firstMilestone = data[keys[0]]

    let goalName = firstMilestone[0].goal
    let goal_id = firstMilestone[0].goal_id
    let creator_id = firstMilestone[0].creator_id

    let goal = {}
    goal.goal = goalName
    goal.goal_id = goal_id
    goal.creator_id = creator_id


    return goal
  }

  function constructSteps(mileArr){
    let steps = []
    for (var i = 0; i < mileArr.length; i++) {
      let step = []
      step[0] = 'step'
      step[1] = mileArr[i].step_id
      step[2] = mileArr[i].step
      steps.push(step)
    }
    return steps
  }


  function constructMilestone(mileArr){
    let milestone = [[]]
    let steps = constructSteps(mileArr)
    milestone[0][0] = 'milestone'
    milestone[0][1] = mileArr[0].milestone_id
    milestone[0][2] = mileArr[0].mile_title
    milestone[1] = steps
    return milestone
  }

  function constructMilestones(data){
    let milestones = []
    let keys = _.keys(data)
    keys.forEach(function(someKey){
      let mileArr = data[someKey]
      milestones.push(constructMilestone(mileArr))
    })
    return milestones
  }

function goalPyrimid(data){
    let goal = constructGoalKeys(data)
    goal.milestones = constructMilestones(data)
    return goal
  }
}
