// usuario.js
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Ruta para obtener todos los usuarios
router.get('/getUsuarios', usuarioController.getAllUsuarios);

// Ruta para iniciar sesión
router.post('/login', usuarioController.login);

module.exports = router;
