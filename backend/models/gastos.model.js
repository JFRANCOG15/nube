const db = require('../config/db')

class GastosModel{
    static async obtenerGastos(){
        const [rows] = await db.query(
            'SELECT ct.nombre, ts.monto, ts.tipo, ts.fecha FROM transacciones ts INNER JOIN categoria ct ON ts.ct_id = ct.id LIMIT 5'
        )
        return rows
    }
}

module.exports = GastosModel