import {recMenu, recAlta, recBaja, recMod, recCons, recNuevo, recMT, recBusq}from '../controller/recetaController.js';
import express from 'express';

const rutaReceta=express.Router();
rutaReceta.get('/recetas', recMenu);
rutaReceta.get('/recetas/alta', recAlta);
rutaReceta.get('/recetas/baja', recBaja);
rutaReceta.get('/recetas/mod', recMod);
rutaReceta.get('/recetas/cons', recCons);
rutaReceta.get('/recetas/buscar/:recBusq', recBusq);
rutaReceta.post('/recetas/recNuevo', recNuevo);
rutaReceta.get('/recetas/MostrarTodo', recMT);
export {rutaReceta}