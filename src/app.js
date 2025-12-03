const express = require('express');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(morgan('combined'));
app.use(express.json());

// Ruta temporal para verificar que funciona
app.get('/', (req, res) => {
  res.json({ message: 'TextMaster API - Configuración inicial - Grupo - 4' });
});

module.exports = app;