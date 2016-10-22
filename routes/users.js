"use strict";

const express = require('express');
const router = express.Router();


module.exports = (knex) => {

  router.get('/users', (req, res) => {

    knex.select('*')
      .from('users')
      .then((results) => {
        console.log(results)
        res.json(results)
      })
  })

  router.post("/", (req, res) => {

  })
  return router;
}