const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    post: 5432,
    database: 'sample'
});

module.exports = pool;