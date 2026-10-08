import {ventMenu, ventAlta, ventBaja, ventMod, ventCons}from '../controller/ventaController.js';
import express from 'express';

const rutaVenta=express.Router()
rutaVenta.get('/ventas', ventMenu)
rutaVenta.get('/ventas/alta', ventAlta)
rutaVenta.get('/ventas/baja', ventBaja)
rutaVenta.get('/ventas/mod', ventMod)
rutaVenta.get('/ventas/cons', ventCons)
// rutaVenta.get('/ventas/cmt', cmt)
// rutaVenta.post('/ventas/ventNuevo', cNuevo)
export {rutaVenta}