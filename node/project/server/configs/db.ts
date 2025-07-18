const { Pool } = require('pg')

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST, // буде "db" через docker-compose
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT) || 5432,
});
