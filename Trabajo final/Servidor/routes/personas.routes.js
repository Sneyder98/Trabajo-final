const { Router }= require('express');

const {agregarPersona, editarPersonas, eliminarPersonas, mostrarPersonas } = require('../controllers/persona.controller')

const routerPersonas = Router();

routerPersonas.get('/personas/', mostrarPersonas);
routerPersonas.post('/personas/', agregarPersona);
routerPersonas.put('/personas/', editarPersonas);
routerPersonas.delete('/personas/', eliminarPersonas);

module.exports = routerPersonas;