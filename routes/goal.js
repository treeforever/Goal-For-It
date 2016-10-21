'use strict';

const express = require('express');
const router = express.Router();


module.exports = () => {

  router.get('/', (req, res) => {
    res.render('goal');
  });

  router.get('/:id', (req, res) => {
    var friend_id = req.params.id;
    res.send(`Welcome to your friend ${friend_id}'s goal!`);
  });

  router.post('/', (req, res) => {
    //add milestones or steps to your goal
  });

  router.post('/', (req, res) => {
    //'like' friends goal
  });

  return router;
};