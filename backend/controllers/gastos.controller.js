const model = require('../models/gastos.model')

class GastosController{

    static async obtenerGastos(req, res){
        try {
            const gastos = await model.obtenerGastos()
            res.json(gastos)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Error al obtener gastos' })
        }
    }

    static async obtenerCategorias(req, res){
        try {
            const categorias = await model.obtenerCategorias()
            res.json(categorias)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Error al obtener categorías' })
        }
    }

    static async crearGasto(req, res){
        try {
            const { ct_id, monto, tipo } = req.body

            if (!ct_id || monto === undefined || tipo === undefined) {
                return res.status(400).json({ error: 'Faltan datos: ct_id, monto y tipo son requeridos' })
            }

            if (isNaN(monto) || Number(monto) <= 0) {
                return res.status(400).json({ error: 'El monto debe ser un número mayor a 0' })
            }

            const fecha = new Date().toISOString().slice(0, 10)

            const resultado = await model.crearTransaccion({
                ct_id: Number(ct_id),
                monto: Number(monto),
                tipo: Number(tipo),
                fecha
            })

            res.status(201).json({ mensaje: 'Transacción registrada correctamente', id: resultado.insertId })
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Error al registrar la transacción' })
        }
    }
}

module.exports = GastosController
