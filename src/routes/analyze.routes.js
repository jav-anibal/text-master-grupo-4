const express = require('express');
const { analyzeText } = require('../utils/textUtils');
const router = express.Router();

/**
 * GET /analyze?text=hola mundo
 * Analiza el texto y devuelve estadísticas
 */
router.get('/', (req, res) => {
    const { text } = req.query;

    // Validar que se envió el parámetro
    if (!text) {
        return res.status(400).json({
            error: 'Parámetro "text" es requerido',
            example: '/analyze?text=hola mundo'
        });
    }

    try {
        const analysis = analyzeText(text);
        res.status(200).json(analysis);
    } catch (error) {
        res.status(500).json({
            error: 'Error al analizar el texto',
            message: error.message
        });
    }
});

module.exports = router;
