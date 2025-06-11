// utils/db.js
import knex from 'knex';
import knexConfig from '../knexfile.js';

// Get the current environment or default to development
const environment = process.env.NODE_ENV || 'development';

// Create the database connection
const db = knex(knexConfig[environment]);

export default db;
