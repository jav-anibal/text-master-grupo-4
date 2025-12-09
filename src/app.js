const express = require('express');
const morgan = require('morgan');

// Importar rutas
const homeRoutes = require('./routes/home.routes');
const healthRoutes = require('./routes/health.routes');
const reverseRoutes = require('./routes/reverse.routes');
const analyzeRoutes = require('./routes/analyze.routes');

const app = express();

// Middleware
app.use(morgan('combined'));
app.use(express.json());

// Rutas
app.use('/', homeRoutes);
app.use('/health', healthRoutes);
app.use('/reverse', reverseRoutes);
app.use('/analyze', analyzeRoutes);

module.exports = app;