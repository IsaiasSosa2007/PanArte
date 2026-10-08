// import {conectar}from '../database/conexion.js';
// const bdd=await conectar();
export const provAlta=(pet, resp)=>{
    resp.render('provAlta');
}
export const provNuevo=async(pet, resp)=>{
    //1: tomar contenido de los name
    //2: colocar esos name en el insert
    //3: ejecutar ese insert
}
export const provMenu=(pet, resp)=>{
    resp.render('proveedores');
}
export const provBaja=(pet, resp)=>{
    resp.render('provBaja');
}
export const provMod=(pet, resp)=>{
    resp.render('provMod');
}
export const provCons=(pet, resp)=>{
    resp.render('provCons');
}