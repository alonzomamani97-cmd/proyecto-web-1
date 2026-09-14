const express = require('express');
const path = require('path');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

// Servir archivos de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Redirigir la raíz / hacia el login.html
app.get('/', (req, res) => {
  res.redirect('/login.html');
});

// Rutas API
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});