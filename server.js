require('dotenv').config();

const ENV         = process.env.ENV || "development";
const pg          = require('pg');
const knexConfig  = require("./knexfile");
const knex        = require('knex')(knexConfig[ENV]);


