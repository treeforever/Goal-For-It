'use strict';

require('dotenv').config();

const ENV         = process.env.ENV || "development";
const pg          = require('pg');
const express     = require('express');
const PORT        = 8080;
const app         = express();
const knexConfig  = require('./knexfile');
const knex        = require('knex')(knexConfig[ENV]);
const userRoutes  = require('./routes/users.js');
const homeRoutes  = require('./routes/home.js');
const goalRoutes  = require('./routes/goal.js');

//allows react server to perform requests to this server(api)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.redirect('/login')
})

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');

app.use('/login', userRoutes(knex));
app.use('/home', homeRoutes(knex));
app.use('/api', goalRoutes(knex));



app.listen(8080, () => {
  console.log(`Goal app listening on port ${PORT}`)
})
