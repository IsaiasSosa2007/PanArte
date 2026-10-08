import {prodMenu, prodAlta, prodBaja, prodMod, prodCons}from '../controller/productoController.js';
import express from 'express';

const rutaProducto=express.Router()
rutaProducto.get('/productos', prodMenu)
rutaProducto.get('/productos/alta', prodAlta)
rutaProducto.get('/productos/baja', prodBaja)
rutaProducto.get('/productos/mod', prodMod)
rutaProducto.get('/productos/cons', prodCons)
// rutaProducto.get('/productos/cmt', cmt)
// rutaProducto.post('/productos/prodNuevo', cNuevo)
export {rutaProducto}