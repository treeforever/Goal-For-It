'use strict';

const express = require('express');
const router = express.Router();
const _ = require('underscore');


module.exports = (knex) => {

  //performs get request to database for goal informations
  router.get('/', (req, res) => {
    knex.from('goals')
      .where('goals.goal_id', 1)
      .innerJoin('milestones', 'goals.goal_id', 'milestones.goal_id')
      .innerJoin('steps', 'milestones.milestone_id', 'steps.milestone_id')
      .select('goals.goal', 'milestones.mile_title', 'steps.step', 'steps.step_id')
      .then((results) => {
        var groupedResults = _.groupBy(results, function(entry){ return entry.mile_title})
        res.json(groupedResults);
      })
  });

  return router;
};
