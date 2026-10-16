import {empMenu, empAlta, empBaja, empMod, empCons, empNuevo}from '../controller/empleadoController.js';
import express from 'express';

const rutaEmpleado=express.Router()
rutaEmpleado.get('/empleados', empMenu)
rutaEmpleado.get('/empleados/alta', empAlta)
rutaEmpleado.get('/empleados/baja', empBaja)
rutaEmpleado.get('/empleados/mod', empMod)
rutaEmpleado.get('/empleados/cons', empCons)
rutaEmpleado.post('/empleados/empNuevo', empNuevo)
export {rutaEmpleado}