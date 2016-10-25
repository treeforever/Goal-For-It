'use strict';

const express = require('express');
const router = express.Router();
const _ = require('underscore');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

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
              'steps.step'
            )
      .then((results) => {
        var groupedResults = _.groupBy(results, function(entry){ return entry.mile_title})
        res.json(groupedResults);
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
