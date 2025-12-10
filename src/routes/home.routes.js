const express = require('express');
const os = require('os');
const router = express.Router();

/**
 * GET /
 * Endpoint de bienvenida que muestra información del servidor
 */
router.get('/', (req, res) => {
  const hostname = os.hostname();
  
  res.status(200).json({
    message: `Bienvenido a TextMaster API. Servidor: ${hostname}`,
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;