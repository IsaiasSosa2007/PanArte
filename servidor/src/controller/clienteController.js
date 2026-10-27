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
    resp.render('cliBaja', {cliente: null, mensaje: ""});
}
//busca el cliente por id y lo muestra para confirmar la baja
export const cliBajaBusq=async(pet, resp)=>{
    try{
        let cliId=parseInt(pet.params.cliBusq);
        const consultaSQL=`SELECT id, dni, nombre, apellido, telefono, email, descuento FROM clientes_frecuentes WHERE id=${cliId};`;
        const [busqueda]=await bdd.query(consultaSQL);
        if(busqueda.length>0){
            resp.render('cliBaja', {cliente: busqueda[0], mensaje: ""});
        }
        else{
            resp.render('cliBaja', {cliente: null, mensaje: "No existe un cliente con ese ID"});
        }
    }
    catch(error){
        console.log("No se pudo realizar la consulta "+error);
        resp.render('cliBaja', {cliente: null, mensaje: "Error al buscar el cliente"});
    }
}
//elimina el cliente (el id llega desde un input oculto del formulario)
export const cliEliminar=async(pet, resp)=>{
    let cliId=parseInt(pet.body.cliId);
    try{
        const bajaSQL=`DELETE FROM clientes_frecuentes WHERE id=${cliId};`;
        const [resultado]=await bdd.query(bajaSQL);
        console.log(resultado);
        resp.render('cliBaja', {cliente: null, mensaje: "Cliente eliminado correctamente"});
    }
    catch(error){
        console.log("No se pudo eliminar el cliente "+error);
        //1451: el cliente tiene ventas o pedidos que lo usan (FK con RESTRICT)
        if(error.errno==1451){
            resp.render('cliBaja', {cliente: null, mensaje: "No se puede eliminar: el cliente tiene ventas o pedidos registrados"});
        }
        else{
            resp.render('cliBaja', {cliente: null, mensaje: "Error al eliminar el cliente"});
        }
    }
}

//----------------------------------------------------------
// MODIFICACION
//----------------------------------------------------------
//muestra la pantalla de modificacion vacia, solo con el buscador
export const cliMod=(pet, resp)=>{
    resp.render('cliMod', {cliente: null, mensaje: ""});
}
//busca el cliente por id y carga sus datos en el formulario
export const cliModBusq=async(pet, resp)=>{
    try{
        let cliId=parseInt(pet.params.cliBusq);
        const consultaSQL=`SELECT id, dni, nombre, apellido, telefono, email, descuento FROM clientes_frecuentes WHERE id=${cliId};`;
        const [busqueda]=await bdd.query(consultaSQL);
        if(busqueda.length>0){
            resp.render('cliMod', {cliente: busqueda[0], mensaje: ""});
        }
        else{
            resp.render('cliMod', {cliente: null, mensaje: "No existe un cliente con ese ID"});
        }
    }
    catch(error){
        console.log("No se pudo realizar la consulta "+error);
        resp.render('cliMod', {cliente: null, mensaje: "Error al buscar el cliente"});
    }
}
//guarda los cambios del formulario
export const cliGuardar=async(pet, resp)=>{
    let id, dni, nom, ape, tel, email, desc;
    id=parseInt(pet.body.cliId);
    dni=pet.body.cliDni;
    nom=pet.body.cliNom;
    ape=pet.body.cliApe;
    tel=pet.body.cliTel;
    email=pet.body.cliEmail;
    desc=pet.body.cliDesc;
    //si el dni o el email vienen vacios se guardan como NULL (sin comillas)
    let dniSQL, emailSQL;
    if(dni==""){
        dniSQL="NULL";
    }
    else{
        dniSQL="'"+dni+"'";
    }
    if(email==""){
        emailSQL="NULL";
    }
    else{
        emailSQL="'"+email+"'";
    }
    if(desc==""){
        desc=0;
    }
    try{
        const modSQL=`UPDATE clientes_frecuentes SET dni=${dniSQL}, nombre='${nom}', apellido='${ape}', telefono='${tel}', email=${emailSQL}, descuento=${desc} WHERE id=${id};`;
        const [resultado]=await bdd.query(modSQL);
        console.log(resultado);
        resp.render('cliMod', {cliente: null, mensaje: "Cliente modificado correctamente"});
    }
    catch(error){
        console.log("No se pudo modificar el cliente "+error);
        //1062: dato repetido en una columna UNIQUE (el dni)
        if(error.errno==1062){
            resp.render('cliMod', {cliente: null, mensaje: "Ya existe otro cliente con ese DNI"});
        }
        else{
            resp.render('cliMod', {cliente: null, mensaje: "Error al modificar el cliente"});
        }
    }
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
        let mostrarSQL="SELECT id, dni, nombre, apellido, telefono, email, descuento FROM clientes_frecuentes order by id;";
        const [registros]=await bdd.query(mostrarSQL);
        resp.render('cliMT', {registros});
    }catch(error){
        console.log('no puede mostrar los datos');
    }
}
