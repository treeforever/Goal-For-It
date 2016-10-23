'use strict';

const express = require('express');
const router = express.Router();



module.exports = (knex) => {

  //performs get request to database for goal informations
  router.get('/', (req, res) => {
    knex.select('*')
      .from('notices')
      .then((results) => {
        res.json(results);
      })
  });

  return router;
};
