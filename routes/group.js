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
      .innerJoin('money', 'money.group_id', 'groups.group_id')
      .where('groups.group_id', 1)
      .select('groups.name', 'groups.description', 'users.username')
      .then((results) => {
        res.json(results);
      })
  })

  //performs get request to database for notifications
  router.get('/notif', (req, res) => {

    knex.select('*')
      .from('notices')
      .orderBy('notice_id', 'desc')
      .then((results) => {
        res.json(results);
    })

  })

  router.get('/notif/:name', (req, res) => {
    knex.select('*')
      .from('users')
      .where('username', req.params.name)
      .then((results) => {
        if (results = []){
          console.log('empty')
        }else {
          res.json(results)
        }
      })
  })

  //performs post request to database for all notifications
  router.post('/notif', jsonParser, (req, res) => {
    knex('notices').insert({
      content: req.body.notif.content,
      sender_id: 1,
      receiver_id: req.body.notif.receiver_id,
      type: req.body.notif.type
    })
    .then(function(resp) {
      res.json(resp)
      console.log('Notification insertion complete.')
    })
    .catch(function(err){
      console.error(err)
    })
  })



  return router;
};
