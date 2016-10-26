"use strict";

const express = require('express');
const router = express.Router();


module.exports = (knex) => {

  router.get('/', (req, res) => {

    knex.select('*')
      .from('users')
      .then((results) => {
        res.json(results)
      })
  })

  router.get('/:id', (req, res) => {
    knex('users')
      .where('user_id', req.params.id)
      .then((results) => {
        res.json(results[0])
      })
  })

  router.post("/", (req, res) => {

  })
  return router;
}