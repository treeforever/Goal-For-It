'use strict';

const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()


module.exports = (knex) => {

  //performs get request to database for goal informations
  router.get('/', (req, res) => {
    knex.select('*')
      .from('users')
      .innerJoin('users_groups', 'users_groups.user_id', 'users.user_id')
      .innerJoin('groups', 'groups.group_id', 'users_groups.group_id')
      .where('groups.group_id', 1)
      .select('groups.name', 'groups.description', 'users.username')
      .then((results) => {
        console.log(results)
        res.json(results);
      })
  });

  //performs get request to database for notifications
  router.get('/notif', (req, res) => {

    knex.select('*')
      .from('notices')
      .then((results) => {
        res.json(results);
    })

  });

  // router.post('/notif', (req, res) => {
  //   knex.insert()
  // })

  return router;
};
