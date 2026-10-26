import {conectar}from '../database/conexion.js';
const bdd=await conectar();
export const empAlta=(pet, resp)=>{
    resp.render('empAlta');
}
export const empNuevo=async(pet, resp)=>{
    let nom, ape, tel, puesto, fecha;
    nom=pet.body.empNom;
    ape=pet.body.empApe
    tel=pet.body.empTel;
    puesto=pet.body.empPuesto;
    fecha=pet.body.empFecha;

    try {
        let altasSQL= "INSERT INTO `empleados`(`nombre`,`apellido`,`puesto`,`fecha_contratacion`,`telefono`)VALUES('"+nom+"','"+ape+"','"+puesto+"','"+fecha+"','"+tel+"');";
        const [registro]=await bdd.query(altasSQL);
        resp.render('index');
        console.log(registro);
    } catch (error) {
        console.log(`error al crear la sentencia insert ${error}`);
    }
}
export const empMenu=(pet, resp)=>{
    resp.render('empleados');
}
export const empBaja=(pet, resp)=>{
    resp.render('empBaja');
}
export const empMod=(pet, resp)=>{
    resp.render('empMod');
}
export const empBusq=async(pet, resp)=>{
    try{
        let empId=parseInt(pet.params.empBusq);
        const consultaSQL=`SELECT id, nombre, apellido, puesto, fecha_contratacion, telefono FROM empleados where id=${empId};`;
        const [busqueda]=await bdd.query(consultaSQL);
        console.log(busqueda);
        resp.render('empCons', {busqueda});
    }
    catch(error){
        console.log("No se pudo realizar la consulta"+error);
        resp.render('empCons', {busqueda: null});
    }
}
export const empCons=(pet, resp)=>{
        resp.render('empCons', {busqueda: null});
}
export const empMT=async(pet, resp)=>{
    try{
        let mostrarSQL="SELECT id, nombre, apellido, puesto, fecha_contratacion, telefono FROM panartev8.empleados order by id;";
        const [registros]=await bdd.query(mostrarSQL);
        resp.render('empMT', {registros});
    }catch(error){
        console.log('no puede mostrar los datos');
    }
}