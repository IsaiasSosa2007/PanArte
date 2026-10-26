import {ventMenu, ventAlta, ventBaja, ventMod, ventCons, ventNuevo, ventMT, ventBusq}from '../controller/ventaController.js';
import express from 'express';

const rutaVenta=express.Router();
rutaVenta.get('/ventas', ventMenu);
rutaVenta.get('/ventas/alta', ventAlta);
rutaVenta.get('/ventas/baja', ventBaja);
rutaVenta.get('/ventas/mod', ventMod);
rutaVenta.get('/ventas/cons', ventCons);
rutaVenta.get('/ventas/buscar/:ventBusq', ventBusq);
rutaVenta.get('/ventas/mostrarTodo', ventMT);
rutaVenta.post('/ventas/ventNuevo', ventNuevo);
export {rutaVenta}