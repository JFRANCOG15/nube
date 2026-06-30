const model = require('../models/gastos.model')

class GastosController{
    static async obtenerGastos(req, res){
        try {
            const gastos = await model.obtenerGastos()
            res.json(gastos) // array plano
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: 'Error al obtener gastos' })
        }
    }
}

module.exports = GastosController