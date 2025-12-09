const express = require('express');
const morgan = require('morgan');

// Importar rutas
const homeRoutes = require('./routes/home.routes');
const healthRoutes = require('./routes/health.routes');
const reverseRoutes = require('./routes/reverse.routes');
const analyzeRoutes = require('./routes/analyze.routes');
const transformRoutes = require('./routes/transform.routes');

const app = express();

// Middleware
app.use(morgan('combined'));
app.use(express.json());

// Rutas
app.use('/', homeRoutes);
app.use('/health', healthRoutes);
app.use('/reverse', reverseRoutes);
app.use('/analyze', analyzeRoutes);
app.use('/transform', transformRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    error: 'Endpoint no encontrado',
    availableEndpoints: [
      'GET /',
      'GET /health',
      'GET /reverse?text=...',
      'GET /analyze?text=...',
      'GET /transform?text=...&action=upper|lower'
    ]
  });
});

module.exports = app;
