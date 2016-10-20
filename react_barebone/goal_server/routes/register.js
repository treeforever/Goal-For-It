"use strict";

const express = require('express');
const router = express.Router();


module.exports = () => {

  router.get('/', (req, res) => {
    res.send('Welcome to register page')

  })
  router.post('/', (req, res) => {

  })
  return router;
}