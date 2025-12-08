const express = require('express');
const morgan = require('morgan');

// Importar rutas
const homeRoutes = require('./routes/home.routes');
const healthRoutes = require('./routes/health.routes');

const app = express();

// Middleware
app.use(morgan('combined'));
app.use(express.json());

// Rutas
app.use('/', homeRoutes);
app.use('/health', healthRoutes);

module.exports = app;