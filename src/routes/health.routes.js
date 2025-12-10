const express = require('express');
const router = express.Router();

// Variable para trackear el tiempo de inicio
const startTime = Date.now();

/**
 * GET /health
 * Endpoint de health check para monitoreo
 */
router.get('/', (req, res) => {
  const uptime = Math.floor((Date.now() - startTime) / 1000);
  
  res.status(200).json({
    status: 'UP',
    uptime: uptime,
    timestamp: new Date().toISOString(),
    service: 'TextMaster API'
  });
});

module.exports = router;