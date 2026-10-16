import {conectar}from '../database/conexion.js';
const bdd=await conectar();
export const cliAlta=(pet, resp)=>{
    resp.render('cliAlta');
}
export const cliNuevo=async(pet, resp)=>{
    let dni, nom, ape, tel, email;
    dni=pet.body.cliDni;
    nom=pet.body.cliNom;
    ape=pet.body.cliApe
    nom=nom+" "+ape;
    tel=pet.body.cliTel;
    email=pet.body.cliEmail;
    esFrecuente=1;//1=si 0=no
    try {
        let altasSQL= "INSERT INTO clientes_frecuentes (`dni`,`nombre`,`telefono`,`email`,`es_frecuente`) VALUES('"+dni+"','"+nom+"','"+tel+"','"+email+"','"+esFrecuente+"');";
        const [registro]=await bdd.query(altasSQL);
        resp.render('index');
        console.log(registro);
    } catch (error) {
        console.log(`error al crear la sentencia insert ${error}`);
    }
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