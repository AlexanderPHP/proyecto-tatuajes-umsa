import express from 'express'
import LogAcceso from '../models/LogAcceso.js'

const router = express.Router()

// GET todos los logs
router.get('/', async (req, res) => {
    try {
        const logs = await LogAcceso.find()
            .populate('usuario', 'nombre email')
            .sort({ fechaHora: -1 }) // Más recientes primero
        res.json(logs)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})

// GET logs por usuario
router.get('/usuario/:id', async (req, res) => {
    try {
        const logs = await LogAcceso.find({ usuario: req.params.id })
            .populate('usuario', 'nombre email')
            .sort({ fechaHora: -1 })
        res.json(logs)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})

export default router