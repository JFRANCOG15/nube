const db = require('../config/db')

class GastosModel{
    static async obtenerGastos(){
        const [rows] = await db.query('SELECT * FROM transacciones')
        console.log(rows)
}}

module.exports = GastosModel