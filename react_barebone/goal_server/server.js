'use strict';

const express     = require('express');
const PORT        = 3000;
const app         = express();
const ENV         = process.env.ENV;
// const knexConfig  = require('.knexfile');
// const knex        = require('knex')(knexConfig[ENV]);
const userRoutes  = require('./routes/users.js')
const registerRoutes  = require('./routes/register.js')
const homeRoutes  = require('./routes/home.js')
const goalRoutes  = require('./routes/goal.js')


app.use('/login', userRoutes());
app.use('/register', registerRoutes());
app.use('/home', homeRoutes());
app.use('/goal', goalRoutes());


app.listen(3000, () => {
  console.log(`Goal app listening on port ${PORT}`)
})