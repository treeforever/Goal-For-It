"use strict";

const express    = require('express');
const router     = express.Router();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const cors       = require('cors')



module.exports = (knex) => {

  router.get('/', (req, res) => {

    knex.select('*')
      .from('users')
      .then((results) => {
        res.json(results)
      })
  })

  router.get('/:id', (req, res) => {
    knex.select('*')
      .from('users')
      .innerJoin('users_groups', 'users_groups.user_id', 'users.user_id')
      .innerJoin('groups', 'groups.group_id', 'users_groups.group_id')
      .innerJoin('money', 'money.group_id', 'groups.group_id')
      .where('users.user_id', req.params.id)
      .select('users.user_id', 'users.username', 'users.password', 'users.email', 'users.user_money', 'money.amount')
      .then((results) => {
        res.json(results[0])
      })
  })

  router.get('/tag/:name', (req, res) => {
    knex('users')
      .where('username', req.params.name)
      .first()
      .then((results) => {
        res.json(results)
      })
  })

  router.options('/:id', cors())

  router.put("/:id", cors(), jsonParser, (req, res) => {
    knex('users')
      .where('user_id', req.params.id)
      .update({
        user_money: req.body.userMoney,
        thisKeyIsSkipped: undefined
      })
      .then(function(resp){
        console.log(`user money is now ${req.body.userMoney}`)
        res.json(req.params)
      })
      .catch(function (err) {
        res.status(500).send('database error: ' + JSON.stringify(err));
      })

    knex('money')
      .where('group_id', 1)
      .update({
        amount: req.body.groupMoney,
        thisKeyIsSkipped:undefined
      })
      .then(function(resp){
        console.log(`group money is now ${req.body.groupMoney}`)
      })
      .catch(function (err) {
        res.status(500).send('database error: ' + JSON.stringify(err));
      })
  })
  return router;
}