import {conectar}from '../database/conexion.js';
const bdd=await conectar();
export const recAlta=(pet, resp)=>{
    resp.render('recAlta');
}
export const recNuevo=async(pet, resp)=>{
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
export const recMenu=(pet, resp)=>{
    resp.render('recetas');
}
export const recBaja=(pet, resp)=>{
    resp.render('recBaja');
}
export const recMod=(pet, resp)=>{
    resp.render('recMod');
}
export const recBusq=async(pet, resp)=>{
    try{
        let recId=parseInt(pet.params.recBusq);
        const consultaSQL=`SELECT id, dni, nombre, apellido, telefono, email, descuento FROM recentes_frecuentes where id=${recId};`;
        const [busqueda]=await bdd.query(consultaSQL);
        console.log(busqueda);
        resp.render('recCons', {busqueda});
    }
    catch(error){
        console.log("No se pudo realizar la consulta"+error);
        resp.render('recCons', {busqueda: null});
    }
}
export const recCons=(pet, resp)=>{
        resp.render('recCons', {busqueda: null});
}
    /*form action : "/ruta/:(parametro)
    ruta: /ruta/:parametro--->el parametro se conecta con el "name" asignado al input
    ruta con dos cosas de consuta
    /ruta/:parametro1/parametro2

    export const ventCons=(pet, resp)=>{
        let ventId=pet.params.parametro}
        const [consultaSQL, format]= `SELECT id, dni, nombre, apellido, telefono, email, descuento FROM recentes_frecuentes where id=${ventId};`
    
    */
export const recMT=async(pet, resp)=>{
    try{
        let mostrarSQL="SELECT id, dni, nombre, apellido, telefono, email, descuento FROM panartev8.recentes_frecuentes order by id;";
        const [registros]=await bdd.query(mostrarSQL);
        resp.render('recMT', {registros});
    }catch(error){
        console.log('no puede mostrar los datos');
    }
}
