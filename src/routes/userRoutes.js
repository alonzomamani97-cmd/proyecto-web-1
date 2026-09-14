const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rutas generales
router.get('/', userController.getUsers);

// Rutas de autenticación (que coinciden con tu frontend auth.js)
router.post('/login', userController.login);
router.post('/register', userController.register); // O createUser, dependiendo de cómo lo nombraste en tu controller

module.exports = router;