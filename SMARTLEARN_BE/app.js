// app.js
const express = require('express');
const app = express();
const port = 3000;

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Escuchar en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});