const mysql = requiere('mysql2') 

const pool = mysql.createPool(
    {
        user: 'root',
        host: 'localhost',
        pasword: 'root',
        port: 3306,
        database: 'Finanza'
    }
)

const promisePool = pool.promise()

module.exports = promisePool