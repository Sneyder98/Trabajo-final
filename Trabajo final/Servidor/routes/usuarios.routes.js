const { Router }= require('express');

const {agregarUsuario, mostrarUsuarios, login} = require('../controllers/user.controller')

const routerUsuario = Router();

routerUsuario.get('/usuarios/', mostrarUsuarios);
routerUsuario.post('/usuarios/', agregarUsuario);
routerUsuario.post('/login/', login);

module.exports = routerUsuario;