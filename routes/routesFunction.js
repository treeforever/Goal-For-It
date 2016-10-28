const _ = require('underscore')

function constructGoalKeys(data) {
  let keys = _.keys(data)
  let firstMilestone = data[keys[0]]

  let goalName = firstMilestone[0].goal
  let goal_id = firstMilestone[0].goal_id
  let creator_id = firstMilestone[0].creator_id
  let checked = firstMilestone[0].checked

  let goal = {}
  goal.goal = goalName
  goal.goal_id = goal_id
  goal.creator_id = creator_id
  goal.checked = checked
  return goal
}

function constructSteps(mileArr) {
  let steps = []
  for (var i = 0; i < mileArr.length; i++) {
    let step = {}
    step.id = mileArr[i].step_id
    step.step = mileArr[i].step
    step.checked = mileArr[i].checked
    step.milestone_id = mileArr[i].milestone_id
    steps.push(step)
  }
  return steps
}

function constructMilestone(mileArr){
  let milestone = {}
  let steps = constructSteps(mileArr)
  milestone.id = mileArr[0].milestone_id
  milestone.title = mileArr[0].mile_title
  milestone.checked = mileArr[0].checked
  milestone.steps = steps
  return milestone
}

function constructMilestones(data) {
  let milestones = []
  let keys = _.keys(data)
  keys.forEach(function(someKey){
    let mileArr = data[someKey]
    milestones.push(constructMilestone(mileArr))
  })
  return milestones
}

function goalPyrimid (data) {
  let goal = constructGoalKeys(data)
  goal.milestones = constructMilestones(data)
  return goal
}

module.exports = {
  goalPyrimid };
