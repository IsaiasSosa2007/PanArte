import {conectar}from '../database/conexion.js';
const bdd=await conectar();
export const empAlta=(pet, resp)=>{
    resp.render('empAlta');
}
export const empNuevo=async(pet, resp)=>{
    //1: tomar contenido de los name
    //2: colocar esos name en el insert
    //3: ejecutar ese insert
    let nom, ape, tel, puesto, fecha;
    nom=pet.body.empNom;
    ape=pet.body.empApe
    tel=pet.body.empTel;
    puesto=pet.body.empPuesto;
    fecha=pet.body.empFecha;

    try {
        let altasSQL= "INSERT INTO `empleados`(`nombre`,`apellido`,`puesto`,`fecha_contratacion`,`telefono`)VALUES('"+nom+"','"+ape+"','"+tel+"','"+puesto+"','"+fecha+"');";
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
export const empCons=(pet, resp)=>{
    resp.render('empCons');
}
export const empMT=async(pet, resp)=>{
    // resp.render('mostrarTodoCliente');
    try{
        let mostrarSQL="SELECT id_cliente,nombre,direccion,telefono,ciudad FROM mydb.cliente Order by id_cliente;";
        const [registros]=await bdd.query(mostrarSQL);
        console.log(registros);
        resp.render('mostrarTodoCliente', {registros});
    }catch(error){
        console.log('no puede mostrar los datos');
    }
}