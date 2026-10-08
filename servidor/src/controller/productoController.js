// import {conectar}from '../database/conexion.js';
// const bdd=await conectar();
export const prodAlta=(pet, resp)=>{
    resp.render('prodAlta');
}
export const prodNuevo=async(pet, resp)=>{
    //1: tomar contenido de los name
    //2: colocar esos name en el insert
    //3: ejecutar ese insert
}
export const prodMenu=(pet, resp)=>{
    resp.render('productos');
}
export const prodBaja=(pet, resp)=>{
    resp.render('prodBaja');
}
export const prodMod=(pet, resp)=>{
    resp.render('prodMod');
}
export const prodCons=(pet, resp)=>{
    resp.render('prodCons');
}