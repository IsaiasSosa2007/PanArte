import {cliMenu, cliAlta, cliNuevo, cliBaja, cliBajaDelete, cliMod, cliCons, cliBusq, cliMT} from '../controller/clienteController.js';
import express from 'express';

const rutaCliente=express.Router();
rutaCliente.get('/clientes', cliMenu);

rutaCliente.get('/clientes/alta', cliAlta);// ALTAS ALTAS ALTAS ALTAS
rutaCliente.post('/clientes/cliNuevo', cliNuevo);

rutaCliente.get('/clientes/baja', cliBaja);// BAJAS BAJAS BAJAS BAJAS
rutaCliente.get('/clientes/bajaDelete/:cliBusqToDelete', cliBajaDelete);

rutaCliente.get('/clientes/mod', cliMod);// MODIFICAR MODIFICAR MODIFICAR MODIFICAR

rutaCliente.get('/clientes/cons', cliCons);// CONSULTAS CONSULTAS CONSULTAS CONSULTAS
rutaCliente.get('/clientes/buscar/:cliBusq', cliBusq);

rutaCliente.get('/clientes/mostrarTodo', cliMT);// MOSTRARTODO MOSTRARTODO MOSTRARTODO MOSTRARTODO

export {rutaCliente}