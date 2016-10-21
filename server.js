'use strict';

// require('dotenv').config();

// const ENV         = process.env.ENV || "development";
const pg          = require('pg');
const express     = require('express');
const PORT        = 3000;
const app         = express();
// const knexConfig  = require('.knexfile');
// const knex        = require('knex')(knexConfig[ENV]);
const userRoutes  = require('./routes/users.js');
const homeRoutes  = require('./routes/home.js');
const goalRoutes  = require('./routes/goal.js');

app.get('/', (req, res) => {
  res.redirect('/login')
})

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');

app.use('/login', userRoutes());
// app.use('/')
app.use('/home', homeRoutes());
app.use('/goal', goalRoutes());


app.listen(3000, () => {
  console.log(`Goal app listening on port ${PORT}`)
})