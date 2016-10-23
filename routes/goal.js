'use strict';
const _ = require("underscore")

const express = require('express');
const router = express.Router();
const _ = require('underscore');


module.exports = (knex) => {

  //performs get request to database for goal informations
<<<<<<< HEAD
  router.get('/', (req, res) => {
=======
  router.get('/goal', (req, res) => {
    let selectedGoalId = Number(req.params.goal_id)
>>>>>>> master
    knex.from('goals')
      .innerJoin('milestones', 'goals.goal_id', 'milestones.goal_id')
<<<<<<< HEAD
      .innerJoin('steps', 'milestones.milestone_id', 'steps.milestone_id')
      .select('goals.goal', 'milestones.mile_title', 'steps.step', 'steps.step_id')
=======
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

  router.get('/goal/:goal_id', (req, res) => {
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
>>>>>>> master
      .then((results) => {
        var groupedResults = _.groupBy(results, function(entry){ return entry.mile_title})
        res.json(groupedResults);
      })
  });

  return router;
};
