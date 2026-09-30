
//importamos todas las librerias externas que necesitamos
import express from 'express';
import color from 'colors';
import path from 'path';
import {fileURLToPath} from 'url';


import {rutaInicio}from './rutas/rutaInicio.js';
// import {rCliente} from './rutas/rutaCliente.js';
// import {rProducto} from './rutas/rutaProducto.js';
// import {rVenta} from './rutas/rutaVenta.js';


//declaramos un numero cualquiera para el puerto
const puerto=3000;
//declaramos una variable con el que usar el framework express
const app = express();
//asignamos la extension ejs para cargar archivos
app.set('view engine', 'ejs');
//asignamos la ruta del archivo que vamos a usar
const directorio=path.dirname(fileURLToPath(import.meta.url));
//asignamos la ruta y la carpeta de donde viene la ruta
app.set('views', path.join(directorio, 'vistas'));
console.log(directorio);
//llamamos  a la carpeta de public que contiene el css
app.use(express.static(path.join(directorio, 'public')))
//no se ekisde

app.use(express.urlencoded({extended:false}));
app.use(rutaInicio);


// app.use(rCliente);
// app.use(rProducto);
// app.use(rVenta);
//indica que el puerto se ha iniciado con un comentario por consola cuando el puerto se inicia
app.listen(puerto, ()=>{
    console.log(`servidor iniciado ${puerto}`.blue);
});

///npm run dev para ejecutar el nodemon/nodejs


//altas bajas modificaciones consultas y mostrar