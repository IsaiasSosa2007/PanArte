import {empMenu, empAlta, empBaja, empMod, empCons}from '../controller/empleadoController.js';
import express from 'express';

const rutaEmpleado=express.Router()
rutaEmpleado.get('/empleados', empMenu)
rutaEmpleado.get('/empleados/alta', empAlta)
rutaEmpleado.get('/empleados/baja', empBaja)
rutaEmpleado.get('/empleados/mod', empMod)
rutaEmpleado.get('/empleados/cons', empCons)
// rutaEmpleado.get('/empleados/cmt', cmt)
// rutaEmpleado.post('/empleados/cliNuevo', cNuevo)
export {rutaEmpleado}