// import {conectar}from '../database/conexion.js';
// const bdd=await conectar();
export const ingAlta=(pet, resp)=>{
    resp.render('ingAlta');
}
export const ingNuevo=async(pet, resp)=>{
    //1: tomar contenido de los name
    //2: colocar esos name en el insert
    //3: ejecutar ese insert
}
export const ingMenu=(pet, resp)=>{
    resp.render('ingredientes');
}
export const ingBaja=(pet, resp)=>{
    resp.render('ingBaja');
}
export const ingMod=(pet, resp)=>{
    resp.render('ingMod');
}
export const ingCons=(pet, resp)=>{
    resp.render('ingCons');
}