require("dotenv").config();
const { Pool } = require("pg");
let pool = Pool;

if (process.env.PRODUCTION == "true") {
  pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5432,
  });
}
module.exports = pool;

/*const { Pool } = require('pg');
const pool = new Pool({
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME,
port:5432})*/
