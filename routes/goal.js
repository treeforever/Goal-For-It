'use strict';

const express = require('express');
const router = express.Router();


module.exports = (knex) => {

  router.get('/', (req, res) => {

    knex.select('*')
      .from('goals')
      .then((results) => {
      console.log(results)
      res.json(results);
    })

  });

  router.get('/:id', (req, res) => {
    var friend_id = req.params.id;

    knex.select()
      .from('goals')
      .where('creator_id', friend_id)
      .then((results) => {
        console.log(results)
        res.json(results)
      })
  });

  router.post('/', (req, res) => {
    //add milestones or steps to your goal
  });

  router.post('/', (req, res) => {
    //'like' friends goal
  });

  return router;
};