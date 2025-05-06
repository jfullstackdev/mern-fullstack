const knex = require('knex');
const path = require('path');
const config = require(path.join(__dirname, '../knexfile.js'));

const environment = process.env.NODE_ENV || 'development';

const db = knex(config[environment]);

module.exports = db;