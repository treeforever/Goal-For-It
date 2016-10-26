'use strict';

const express = require('express');
const router = express.Router();
const _ = require('underscore');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

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




module.exports = (knex) => {

  //performs get request to database for goal informations
  router.get('/', (req, res) => {
    let selectedGoalId = Number(req.params.goal_id)
    knex.from('goals')
      .innerJoin('milestones', 'goals.goal_id', 'milestones.goal_id')
      // .innerJoin('steps', 'milestones.milestone_id', 'steps.milestone_id')
      .select('goals.goal',
              'milestones.mile_title',
              'milestones.milestone_id',
              'goals.goal_id',
              'goals.creator_id'
            )
      .then((results) => {
        res.json(results);
      })
  });

  router.get('/:goal_id', (req, res) => {
    let selectedGoalId = Number(req.params.goal_id)
    knex.from('goals')
      .where('goals.goal_id', selectedGoalId)
      .innerJoin('milestones', 'goals.goal_id', 'milestones.goal_id')
      .innerJoin('steps', 'milestones.milestone_id', 'steps.milestone_id')
      .select('goals.goal',
              'milestones.mile_title',
              'milestones.milestone_id',
              'goals.goal_id',
              'goals.creator_id',
              'steps.step',
              'steps.step_id'
            )
      .then((results) => {
        let groupedResults = _.groupBy(results, function(entry){ return entry.mile_title})
        let structuredGoal = goalPyrimid(groupedResults)
        res.json(structuredGoal);
      })
  });

  router.post('/', jsonParser, (req, res) => {
    //req.body={goal: 'blabla'};
    knex('goals').insert({
      goal: req.body.goal,
      goal_description: '',
      checked: false
    })
    .then(function(resp) {
      console.log('Goal insertion complete.');
    })
    .catch(function(err) {
      console.error(err);
    });
  })


  return router;
};
