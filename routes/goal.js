
const express    = require('express');
const router     = express.Router();
const _          = require('underscore');
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const cors       = require('cors')



const { goalPyrimid } = require('./routesFunction');

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
        res.json(results)
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
              'milestones.checked',
              'goals.goal_id',
              'goals.creator_id',
              'steps.step',
              'steps.step_id',
              'steps.checked',
              'steps.milestone_id'
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
      console.log('Goal insertion complete.')
    })
    .catch(function(err) {
      console.error(err)
    });
  })

  router.options('/:goal_id', cors())

  router.put('/:goal_id', cors(), jsonParser, (req, res) => {
    let selectedGoalId = Number(req.params.goal_id)
    knex('goals')
      .where('goal_id', selectedGoalId)
      .update({
        checked: req.body.checked,
        thisKeyIsSkipped: undefined
      })
      .then(function(resp){
        console.log(`Goal ${selectedGoalId} completed`)
        res.json(req.params)
      })
    })


  return router;
};
