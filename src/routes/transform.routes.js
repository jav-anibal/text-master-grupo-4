const express = require('express');
const { transformText } = require('../utils/textUtils');
const router = express.Router();

/**
 * GET /transform?text=hola&action=upper
 * Transforma el texto según la acción especificada
 */
router.get('/', (req, res) => {
  const { text, action } = req.query;

  // Validar parámetros requeridos
  if (!text) {
    return res.status(400).json({
      error: 'Parámetro "text" es requerido',
      example: '/transform?text=hola&action=upper'
    });
  }

  if (!action) {
    return res.status(400).json({
      error: 'Parámetro "action" es requerido',
      validActions: ['upper', 'lower'],
      example: '/transform?text=hola&action=upper'
    });
  }

  try {
    const transformed = transformText(text, action);
    res.status(200).json({
      original: text,
      action: action.toLowerCase(),
      transformed: transformed
    });
  } catch (error) {
    // Distinguir entre error de validación (400) y error interno (500)
    if (error.message.includes('inválida') || error.message.includes('requiere')) {
      return res.status(400).json({
        error: error.message,
        validActions: ['upper', 'lower']
      });
    }
    
    res.status(500).json({
      error: 'Error al transformar el texto',
      message: error.message
    });
  }
});

module.exports = router;
