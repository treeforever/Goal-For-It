
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
      }).catch(function (err) {
        res.status(500).send('database error: ' + JSON.stringify(err));
      });
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
              'milestones.checked as milestone_checked',
              'goals.goal_id',
              'goals.creator_id',
              'goals.checked as goal_checked',
              'steps.step',
              'steps.step_id',
              'steps.checked as step_checked',
              'steps.milestone_id'
            )
      .then((results) => {
        let groupedResults = _.groupBy(results, function(entry){ return entry.mile_title})
        let structuredGoal = goalPyrimid(groupedResults)
        res.json(structuredGoal);
      }).catch(function (err) {
        res.status(500).send('database error: ' + JSON.stringify(err));
      });
  });

  router.post('/', jsonParser, (req, res) => {
    knex('goals').insert({
      goal: req.body.goal,
      goal_description: '',
      checked: false
    })
    .returning('goal_id')
    .then(function(result) {
      console.log('Goal insertion complete. Its id is ', result)
      res.json({id: result[0]});
    })
    .catch(function(err) {
      console.error(err);
      res.status(500).send('database error: ' + JSON.stringify(err));
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
        console.log(`Goal ${selectedGoalId} is ${req.body.checked}`)
        res.json(req.params);
      }).catch(function (err) {
        res.status(500).send('database error: ' + JSON.stringify(err));
      });
    })


  return router;
};
