import {conectar}from '../database/conexion.js';
const bdd=await conectar();
export const cliAlta=(pet, resp)=>{
    resp.render('cliAlta');
}
export const cliNuevo=async(pet, resp)=>{
    let dni, nom, ape, tel, email, desc;
    dni=pet.body.cliDni;
    nom=pet.body.cliNom;
    ape=pet.body.cliApe
    tel=pet.body.cliTel;
    email=pet.body.cliEmail;
    desc=pet.body.cliDesc;
    try {
        let altasSQL= "INSERT INTO `clientes_frecuentes`(`dni`,`nombre`,`apellido`,`telefono`,`email`,`descuento`)VALUES('"+dni+"','"+nom+"','"+ape+"','"+tel+"','"+email+"','"+desc+"');";
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
export const cliBusq=async(pet, resp)=>{
    try{
        let cliId=parseInt(pet.params.cliBusq);
        const consultaSQL=`SELECT id, dni, nombre, apellido, telefono, email, descuento FROM clientes_frecuentes where id=${cliId};`;
        const [busqueda]=await bdd.query(consultaSQL);
        console.log(busqueda);
        resp.render('cliCons', {busqueda});
    }
    catch(error){
        console.log("No se pudo realizar la consulta"+error);
        resp.render('cliCons', {busqueda: null});
    }
}
export const cliCons=(pet, resp)=>{
        resp.render('cliCons', {busqueda: null});
}
    /*form action : "/ruta/:(parametro)
    ruta: /ruta/:parametro--->el parametro se conecta con el "name" asignado al input
    ruta con dos cosas de consuta
    /ruta/:parametro1/parametro2

    export const ventCons=(pet, resp)=>{
        let ventId=pet.params.parametro}
        const [consultaSQL, format]= `SELECT id, dni, nombre, apellido, telefono, email, descuento FROM clientes_frecuentes where id=${ventId};`
    
    */
export const cliMT=async(pet, resp)=>{
    try{
        let mostrarSQL="SELECT id, dni, nombre, apellido, telefono, email, descuento FROM panartev8.clientes_frecuentes order by id;";
        const [registros]=await bdd.query(mostrarSQL);
        resp.render('cliMT', {registros});
    }catch(error){
        console.log('no puede mostrar los datos');
    }
}
