function constructGoalKeys(data) {
  let keys = Object.keys(data)
  let firstMilestone = data[keys[0]]

  let goalName = firstMilestone[0].goal
  let goal_id = firstMilestone[0].goal_id
  let creator_id = Number(firstMilestone[0].creator_id)
  let goal_checked = firstMilestone[0].goal_checked
  let username = firstMilestone[0].username

  let goal = {}
  goal.goal = goalName
  goal.goal_id = goal_id
  goal.creator_id = creator_id
  goal.goal_checked = goal_checked
  goal.username = username
  return goal
}

function constructSteps(mileArr) {
  let steps = []
  for (var i = 0; i < mileArr.length; i++) {
    let step = {}
    step.id = mileArr[i].step_id
    step.step = mileArr[i].step
    step.checked = mileArr[i].step_checked
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
  milestone.checked = mileArr[0].milestone_checked
  milestone.steps = steps
  return milestone
}

function constructMilestones(data) {
  let milestones = []
  let keys = Object.keys(data)
  keys.forEach(function(someKey){
    let mileArr = data[someKey]
    milestones.push(constructMilestone(mileArr))
  })
  return milestones
}

function goalPyrimid (data) {
  return Object.assign(constructGoalKeys(data), {
    milestones: constructMilestones(data),
  });
}

module.exports = {
  goalPyrimid
};
