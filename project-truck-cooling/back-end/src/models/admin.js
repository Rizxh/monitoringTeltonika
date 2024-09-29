require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool({
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

module.exports = pool