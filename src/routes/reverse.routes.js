const express = require('express');
const { reverseText } = require('../utils/textUtils');
const router = express.Router();

/**
 * GET /reverse?text=hola
 * Invierte el texto proporcionado
 */
router.get('/', (req, res) => {
    const { text } = req.query;

    // Validar que se envió el parámetro
    if (!text) {
        return res.status(400).json({
            error: 'Parámetro "text" es requerido',
            example: '/reverse?text=hola'
        });
    }

    try {
        const reversed = reverseText(text);
        res.status(200).json({
            original: text,
            reversed: reversed
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error al procesar el texto',
            message: error.message
        });
    }
});

module.exports = router;
