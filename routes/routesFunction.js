const _ = require('underscore')

module.exports = {
  // data =  { 'read \'become a developer\' book':
  //    [ {
  //        goal: 'Become a developer',
  //        mile_title: 'read \'become a developer\' book',
  //        milestone_id: 1,
  //        goal_id: 1,
  //        creator_id: '1',
  //        step: 'read chapter 7',
  //        step_id: 1},
  //       {
  //        goal: 'Become a developer',
  //        mile_title: 'read \'become a developer\' book',
  //        milestone_id: 1,
  //        goal_id: 1,
  //        creator_id: '1',
  //        step: 'read chapter 11' } ],
  //   'learn basic about programming':
  //    [  {
  //        goal: 'Become a developer',
  //        mile_title: 'learn basic about programming',
  //        milestone_id: 2,
  //        goal_id: 1,
  //        creator_id: '1',
  //        step: 'codecademy JS' },
  //       {
  //        goal: 'Become a developer',
  //        mile_title: 'learn basic about programming',
  //        milestone_id: 2,
  //        goal_id: 1,
  //        creator_id: '1',
  //        step: 'codecademy Ruby' } ],
  //   research:
  //    [  {
  //        goal: 'Become a developer',
  //        mile_title: 'research',
  //        milestone_id: 3,
  //        goal_id: 1,
  //        creator_id: '1',
  //        step: 'talk to Jose, learn his perspective and get his advice' },
  //       {
  //        goal: 'Become a developer',
  //        mile_title: 'research',
  //        milestone_id: 3,
  //        goal_id: 1,
  //        creator_id: '1',
  //        step: 'go to at least 3 meetups and decide if I am on the right path' } ],
  //   'join a bootcamp':
  //    [  {
  //        goal: 'Become a developer',
  //        mile_title: 'join a bootcamp',
  //        milestone_id: 4,
  //        goal_id: 1,
  //        creator_id: '1',
  //        step: 'talk to LHL' },
  //       {
  //        goal: 'Become a developer',
  //        mile_title: 'join a bootcamp',
  //        milestone_id: 4,
  //        goal_id: 1,
  //        creator_id: '1',
  //        step: 'talk to Bitmaker' },
  //       {
  //        goal: 'Become a developer',
  //        mile_title: 'join a bootcamp',
  //        milestone_id: 4,
  //        goal_id: 1,
  //        creator_id: '1',
  //        step: 'choose one and sign up' } ] }



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
    let milestone = []
    let steps = constructSteps(mileArr)
    milestone[0] = 'milestone'
    milestone[1] = mileArr[0].milestone_id
    milestone[2] = mileArr[0].mile_title
    milestone[3] = steps
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


  export default function goalPyrimid(data){
    let goal = constructGoalKeys(data)
    goal.milestones = constructMilestones(data)
    return goal
  }
}
