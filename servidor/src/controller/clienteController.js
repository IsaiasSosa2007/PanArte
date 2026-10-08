// import {conectar}from '../database/conexion.js';
// const bdd=await conectar();
export const cliAlta=(pet, resp)=>{
    resp.render('cliAlta');
}
export const cliNuevo=async(pet, resp)=>{
    //1: tomar contenido de los name
    //2: colocar esos name en el insert
    //3: ejecutar ese insert
}
export const cliMenu=(pet, resp)=>{
    resp.render('clientes');
}
export const cliBaja=(pet, resp)=>{
    resp.render('cliBaja');
}
export const cliMod=(pet, resp)=>{
    resp.render('cliMod');
}
export const cliCons=(pet, resp)=>{
    resp.render('cliCons');
}