'use strict';

const express = require('express');
const router = express.Router();


module.exports = (knex) => {

  //performs get request to database for goal informations
  router.get('/goal', (req, res) => {
    knex.from('goals')
      .where('goals.goal_id', 1)
      .innerJoin('milestones', 'goals.goal_id', 'milestones.goal_id')
      // .innerJoin('steps', 'milestones.milestone_id', 'steps.milestone_id')
      .select('goals.goal', 'milestones.mile_title', 'milestones.milestone_id')
      .then((results) => {
        res.json(results);
      })
  });

  return router;
};