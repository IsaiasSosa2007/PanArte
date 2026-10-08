// import {conectar}from '../database/conexion.js';
// const bdd=await conectar();
export const ventAlta=(pet, resp)=>{
    resp.render('ventAlta');
}
export const ventNuevo=async(pet, resp)=>{
    //1: tomar contenido de los name
    //2: colocar esos name en el insert
    //3: ejecutar ese insert
}
export const ventMenu=(pet, resp)=>{
    resp.render('ventas');
}
export const ventBaja=(pet, resp)=>{
    resp.render('ventBaja');
}
export const ventMod=(pet, resp)=>{
    resp.render('ventMod');
}
export const ventCons=(pet, resp)=>{
    resp.render('ventCons');
}