'use strict';

const express    = require('express');
const router     = express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const cors       = require('cors')



module.exports = (knex) => {

  //performs get request to database for goal informations
  router.get('/', (req, res) => {
    knex.select('*')
      .from('users')
      .innerJoin('users_groups', 'users_groups.user_id', 'users.user_id')
      .innerJoin('groups', 'groups.group_id', 'users_groups.group_id')
      .innerJoin('money', 'money.group_id', 'groups.group_id')
      .where('groups.group_id', 1)
      .select('groups.name', 'groups.description', 'users.username', 'money.amount')
      .then((results) => {
        res.json(results);
      })
      .catch(function (err) {
        res.status(500).send('database error: ' + JSON.stringify(err));
      });
  })
  router.options('/', cors())

  router.put('/', cors(), jsonParser, (req, res) => {
    knex('money')
      .where('group_id', 1)
      .update({
        amount: req.body.data
      })
      .then((results) => {
        res.json(results);
      })
      .catch(function (err) {
        res.status(500).send('database error: ' + JSON.stringify(err));
      });
  })

  //performs get request to database for notifications
  router.get('/notif', (req, res) => {

    knex.select('*')
      .from('notices')
      .orderBy('notice_id', 'desc')
      .then((results) => {
        res.json(results);
      })
      .catch(function (err) {
        res.status(500).send('database error: ' + JSON.stringify(err));
      });

  })

  router.get('/notif/:name', (req, res) => {
    knex.select('*')
      .from('users')
      .where('username', req.params.name)
      .then((results) => {
        if (results = []){
          console.log('empty')
          res.json(JSON.stringify('empty'))
        }else {
          res.json(results)
        }
      })
      .catch(function (err) {
        res.status(500).send('database error: ' + JSON.stringify(err));
      });
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
    .catch(function (err) {
      res.status(500).send('database error: ' + JSON.stringify(err));
    });
  })



  return router;
};
