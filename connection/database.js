const knex = require('knex')
const knexfile = require('../knexfile')
const database = knex(knexfile.production) 

module.exports = database