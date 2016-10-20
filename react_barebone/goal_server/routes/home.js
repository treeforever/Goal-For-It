'use strict';

const express = require('express');
const router = express.Router();


module.exports = () => {

  router.get('/', (req, res) => {

    res.send('Welcome to your dashboard!');
  })

  router.post('/', (req, res) => {
    //create a new goal
  })
  return router;
}