import express from 'express';
// import { rutaCliente } from './rutaCliente.js';
import { rutaEmpleado } from './rutaEmpleado.js';
// import {} from '.ruta.js';
// import {} from '.ruta.js';
// import {} from '.ruta.js';
// import { rutaProducto } from './rutaProducto.js';
// import {} from '.ruta.js';
// import { rutaVenta } from './rutaVenta.js';
const rutaInicio=express.Router();
rutaInicio.use(rutaEmpleado);
// rutaInicio.use(rutaCliente);
// rutaInicio.use(rutaProducto);
// rutaInicio.use(rutaVenta);
rutaInicio.get('/', (pet, resp)=>{
    resp.render('index');
});
export{rutaInicio};