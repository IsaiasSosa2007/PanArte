import {ingMenu, ingAlta, ingBaja, ingMod, ingCons, ingNuevo, ingMT}from '../controller/ingredienteController.js';
import express from 'express';

const rutaIngrediente=express.Router();
rutaIngrediente.get('/ingredientes', ingMenu);
rutaIngrediente.get('/ingredientes/alta', ingAlta);
rutaIngrediente.get('/ingredientes/baja', ingBaja);
rutaIngrediente.get('/ingredientes/mod', ingMod);
rutaIngrediente.get('/ingredientes/cons', ingCons);
rutaIngrediente.get('/ingredientes/mostrarTodo', ingMT);
rutaIngrediente.post('/ingredientes/ingNuevo', ingNuevo);
export {rutaIngrediente}