// Importar módulos necesarios
const express = require('express');
const morgan = require('morgan'); // Para ver los logs de las peticiones HTTP

// Importar las rutas de los diferentes endpoints
const homeRoutes = require('./routes/home.routes');
const healthRoutes = require('./routes/health.routes');
const reverseRoutes = require('./routes/reverse.routes');
const analyzeRoutes = require('./routes/analyze.routes');

// Crear la aplicación Express
const app = express();

// Middleware para logging y parseo de JSON
app.use(morgan('combined')); // Muestra info de cada petición en la consola
app.use(express.json()); // Para poder recibir JSON en las peticiones

// Configurar las rutas de la API
app.use('/', homeRoutes);
app.use('/health', healthRoutes);
app.use('/reverse', reverseRoutes);
app.use('/analyze', analyzeRoutes);

// Exportar la app para usarla en server.js y en los tests
module.exports = app;