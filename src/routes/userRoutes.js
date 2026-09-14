const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para el inicio de sesión
router.post('/login', userController.login);

// Ruta para obtener el perfil (usada por conexion.js y el dashboard)
router.get('/profile', userController.getProfile);

module.exports = router;