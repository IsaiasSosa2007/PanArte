import {cliMenu, cliAlta, cliBaja, cliMod, cliCons, cliNuevo, cliMT}from '../controller/clienteController.js';
import express from 'express';

const rutaCliente=express.Router();
rutaCliente.get('/clientes', cliMenu);
rutaCliente.get('/clientes/alta', cliAlta);
rutaCliente.get('/clientes/baja', cliBaja);
rutaCliente.get('/clientes/mod', cliMod);
rutaCliente.get('/clientes/cons', cliCons);
rutaCliente.post('/clientes/cliNuevo', cliNuevo);
rutaCliente.get('/clientes/MostrarTodo', cliMT);
export {rutaCliente}