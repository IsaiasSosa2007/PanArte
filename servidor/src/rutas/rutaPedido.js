import {pedMenu, pedAlta, pedBaja, pedMod, pedCons, pedNuevo}from '../controller/pedidoController.js';
import express from 'express';

const rutaPedido=express.Router()
rutaPedido.get('/pedidos', pedMenu)
rutaPedido.get('/pedidos/alta', pedAlta)
rutaPedido.get('/pedidos/baja', pedBaja)
rutaPedido.get('/pedidos/mod', pedMod)
rutaPedido.get('/pedidos/cons', pedCons)
rutaPedido.post('/pedidos/pedNuevo', pedNuevo)
export {rutaPedido}