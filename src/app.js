// Importar módulos necesarios
const express = require('express');
const morgan = require('morgan'); // Para ver los logs de las peticiones HTTP

// Importar las rutas de los diferentes endpoints
const homeRoutes = require('./routes/home.routes');
const healthRoutes = require('./routes/health.routes');
const reverseRoutes = require('./routes/reverse.routes');
const analyzeRoutes = require('./routes/analyze.routes');
const transformRoutes = require('./routes/transform.routes');

const app = express();

// Middleware para logging y parseo de JSON
app.use(morgan('combined')); // Muestra info de cada petición en la consola
app.use(express.json()); // Para poder recibir JSON en las peticiones

// Configurar las rutas de la API
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
