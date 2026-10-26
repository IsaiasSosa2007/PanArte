import {empMenu, empAlta, empBaja, empMod, empCons, empNuevo, empMT, empBusq}from '../controller/empleadoController.js';
import express from 'express';

const rutaEmpleado=express.Router();
rutaEmpleado.get('/empleados', empMenu);
rutaEmpleado.get('/empleados/alta', empAlta);
rutaEmpleado.get('/empleados/baja', empBaja);
rutaEmpleado.get('/empleados/mod', empMod);
rutaEmpleado.get('/empleados/cons', empCons);
rutaEmpleado.get('/empleados/buscar/:empBusq', empBusq);
rutaEmpleado.post('/empleados/empNuevo', empNuevo)
rutaEmpleado.get('/empleados/mostrarTodo', empMT);
export {rutaEmpleado}