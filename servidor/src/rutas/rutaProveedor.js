import {provMenu, provAlta, provBaja, provMod, provCons}from '../controller/proveedorController.js';
import express from 'express';

const rutaProveedor=express.Router()
rutaProveedor.get('/proveedores', provMenu)
rutaProveedor.get('/proveedores/alta', provAlta)
rutaProveedor.get('/proveedores/baja', provBaja)
rutaProveedor.get('/proveedores/mod', provMod)
rutaProveedor.get('/proveedores/cons', provCons)
// rutaProveedor.get('/proveedores/cmt', cmt)
// rutaProveedor.post('/proveedores/provNuevo', cNuevo)
export {rutaProveedor}