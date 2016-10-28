'use strict';

require('dotenv').config();

const ENV         = process.env.ENV || "development";
const pg          = require('pg');
const express     = require('express');
const PORT        = 8080;
const app         = express();
const knexConfig  = require('./knexfile');
const knex        = require('knex')(knexConfig[ENV]);
const cors        = require('cors')
const userRoutes  = require('./routes/users.js');
const loginRoutes = require('./routes/register.js');
const goalRoutes  = require('./routes/goal.js');
const groupRoutes = require('./routes/group.js');
const mileRoutes  = require('./routes/mile.js')
const stepRoutes  = require('./routes/step.js')


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
app.set('views', __dirname + '/public/views');
app.use(express.static(__dirname + '/public'));

app.use('/login', loginRoutes(knex));
app.use('/api/users', userRoutes(knex));
app.use('/api/goals', goalRoutes(knex));
app.use('/api/mile', mileRoutes(knex));
app.use('/api/step', stepRoutes(knex));
app.use('/api/group', groupRoutes(knex))


app.listen(8080, () => {
  console.log(`Goal app listening on port ${PORT}`)
})
