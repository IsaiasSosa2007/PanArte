import {cliMenu, cliAlta, cliNuevo, cliBaja, cliBajaBusq, cliEliminar, cliMod, cliModBusq, cliGuardar, cliCons, cliBusq, cliMT} from '../controller/clienteController.js';
import express from 'express';

const rutaCliente=express.Router();
rutaCliente.get('/clientes', cliMenu);
rutaCliente.get('/clientes/alta', cliAlta);
rutaCliente.post('/clientes/cliNuevo', cliNuevo);
rutaCliente.get('/clientes/baja', cliBaja);
rutaCliente.get('/clientes/baja/buscar/:cliBusq', cliBajaBusq);
rutaCliente.post('/clientes/baja/eliminar', cliEliminar);
rutaCliente.get('/clientes/mod', cliMod);
rutaCliente.get('/clientes/mod/buscar/:cliBusq', cliModBusq);
rutaCliente.post('/clientes/mod/guardar', cliGuardar);
rutaCliente.get('/clientes/cons', cliCons);
rutaCliente.get('/clientes/buscar/:cliBusq', cliBusq);
rutaCliente.get('/clientes/mostrarTodo', cliMT);

export {rutaCliente}