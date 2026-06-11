const mysql = require('mysql2') 

const pool = mysql.createPool(
    {
        user: 'root',
        host: 'localhost',
        password: 'root',
        port: 3306,
        database: 'finanzas'
    }
)

const promisePool = pool.promise()

module.exports = promisePool