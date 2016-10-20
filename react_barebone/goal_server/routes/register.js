"use strict";

const express = require('express');
const router = express.Router();


module.exports = () => {

  app.get('/', (req, res) => {
    res.render('login');
  });

  router.post('/' (req, res) => {
    res.send('posted')
  });
  return router;
}