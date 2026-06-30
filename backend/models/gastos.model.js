const db = require('../config/db')

class GastosModel{
    static async obtenerGastos(){
        const [rows] = await db.query(
            'SELECT ts.ts_id, ct.nombre, ts.monto, ts.tipo, ts.fecha FROM transacciones ts INNER JOIN categoria ct ON ts.ct_id = ct.ct_id ORDER BY ts.ts_id DESC'
        )
        return rows
    }

    static async crearTransaccion({ ct_id, monto, tipo, fecha }){
        const [resultado] = await db.query(
            'INSERT INTO transacciones (fecha, ct_id, monto, tipo) VALUES (?, ?, ?, ?)',
            [fecha, ct_id, monto, tipo]
        )
        return resultado
    }

    static async obtenerCategorias(){
        const [rows] = await db.query('SELECT ct_id, nombre FROM categoria')
        return rows
    }
}

module.exports = GastosModel