import {prodMenu, prodAlta, prodBaja, prodMod, prodCons, prodMT}from '../controller/productoController.js';
import express from 'express';

const rutaProducto=express.Router();
rutaProducto.get('/productos', prodMenu);
rutaProducto.get('/productos/alta', prodAlta);
rutaProducto.get('/productos/baja', prodBaja);
rutaProducto.get('/productos/mod', prodMod);
rutaProducto.get('/productos/cons', prodCons);
rutaProducto.get('/productos/mostrarTodo', prodMT);
// rutaProducto.post('/productos/prodNuevo', prodNuevo);
export {rutaProducto}