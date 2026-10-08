import {cliMenu, cliAlta, cliBaja, cliMod, cliCons}from '../controller/clienteController.js';
import express from 'express';

const rutaCliente=express.Router()
rutaCliente.get('/clientes', cliMenu)
rutaCliente.get('/clientes/alta', cliAlta)
rutaCliente.get('/clientes/baja', cliBaja)
rutaCliente.get('/clientes/mod', cliMod)
rutaCliente.get('/clientes/cons', cliCons)
// rutaCliente.get('/clientes/cmt', cmt)
// rutaCliente.post('/clientes/cliNuevo', cNuevo)
export {rutaCliente}