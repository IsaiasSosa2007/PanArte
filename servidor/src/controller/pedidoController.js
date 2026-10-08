// import {conectar}from '../database/conexion.js';
// const bdd=await conectar();
export const pedAlta=(pet, resp)=>{
    resp.render('pedAlta');
}
export const pedNuevo=async(pet, resp)=>{
    //1: tomar contenido de los name
    //2: colocar esos name en el insert
    //3: ejecutar ese insert
}
export const pedMenu=(pet, resp)=>{
    resp.render('pedidos');
}
export const pedBaja=(pet, resp)=>{
    resp.render('pedBaja');
}
export const pedMod=(pet, resp)=>{
    resp.render('pedMod');
}
export const pedCons=(pet, resp)=>{
    resp.render('pedCons');
}