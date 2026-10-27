import {conectar}from '../database/conexion.js';
const bdd=await conectar();
export const recAlta=(pet, resp)=>{
    resp.render('recAlta');
}
export const recNuevo=async(pet, resp)=>{
    let nom=pet.body.recNom;
    try {
        let altasSQL="INSERT INTO `recetas`(`nombre`)VALUES("+bdd.escape(nom)+");";
        const [registro]=await bdd.query(altasSQL);
        console.log(registro);
        resp.redirect('/recetas');
    } catch (error) {
        console.log(`error al crear la sentencia insert ${error}`);
        resp.redirect('/recetas/alta');
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
    const recId=parseInt(pet.params.recBusq);
    if(isNaN(recId)){
        return resp.render('recCons', {busqueda: null, error: 'El id debe ser un número'});
    }
    try{
        const consultaSQL=`SELECT id, nombre FROM recetas where id=${recId};`;
        const [busqueda]=await bdd.query(consultaSQL);
        if(busqueda.length===0){
            return resp.render('recCons', {busqueda: null, error: `No existe una receta con id ${recId}`});
        }
        resp.render('recCons', {busqueda, error: null});
    }
    catch(error){
        console.log("No se pudo realizar la consulta "+error);
        resp.render('recCons', {busqueda: null, error: 'No se pudo realizar la consulta'});
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
        let mostrarSQL="SELECT id, nombre FROM recetas order by id;";
        const [registros]=await bdd.query(mostrarSQL);
        resp.render('recMT', {registros});
    }catch(error){
        console.log('no puede mostrar los datos');
        resp.render('recMT', {registros: []});
    }
}