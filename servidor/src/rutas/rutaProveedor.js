import {provMenu, provAlta, provBaja, provMod, provCons, provNuevo, provMT}from '../controller/proveedorController.js';
import express from 'express';

const rutaProveedor=express.Router();
rutaProveedor.get('/proveedores', provMenu);
rutaProveedor.get('/proveedores/alta', provAlta);
rutaProveedor.get('/proveedores/baja', provBaja);
rutaProveedor.get('/proveedores/mod', provMod);
rutaProveedor.get('/proveedores/cons', provCons);
rutaProveedor.get('/proveedores/mostrarTodo', provMT);
rutaProveedor.post('/proveedores/provNuevo', provNuevo);
export {rutaProveedor}