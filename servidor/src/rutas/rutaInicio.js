import express from 'express';
import { rutaCliente } from './rutaCliente.js';
import { rutaEmpleado } from './rutaEmpleado.js';
import { rutaIngrediente} from './rutaIngrediente.js';
import { rutaPedido} from './rutaPedido.js';
import { rutaProducto } from './rutaProducto.js';
import { rutaProveedor} from './rutaProveedor.js';
import { rutaVenta } from './rutaVenta.js';
const rutaInicio=express.Router();
rutaInicio.use(rutaEmpleado);
rutaInicio.use(rutaCliente);
rutaInicio.use(rutaProducto);
rutaInicio.use(rutaProveedor)
rutaInicio.use(rutaVenta);
rutaInicio.use(rutaIngrediente);
rutaInicio.use(rutaPedido);
rutaInicio.get('/', (pet, resp)=>{
    resp.render('index');
});
export{rutaInicio};