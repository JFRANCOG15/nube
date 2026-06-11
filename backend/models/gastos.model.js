const db = require('../config/db')

class GastosModel{
    static async obtenerGastos(){
        const [rows] = await db.query('SELECT * FROM transacciones')
        return rows
    }
}

module.exports = GastosModel