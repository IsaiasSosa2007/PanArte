// import {conectar}from '../database/conexion.js';
// const bdd=await conectar();
export const empAlta=(pet, resp)=>{
    resp.render('altaEmpleado');
}
export const empNuevo=async(pet, resp)=>{
    //1: tomar contenido de los name
    //2: colocar esos name en el insert
    //3: ejecutar ese insert
    let id, nom, ape, tel, puesto, fecha;
    id=pet.body.empId;
    nom=pet.body.empNom;
    ape=pet.body.empApe
    tel=pet.bofy.empTel;
    puesto=pet.body.empPuesto;
    fecha=pet.body.empFecha;

    try {
        let altasSQL= "INSERT INTO empleados (`id`,`nombre`,`apellido`,`puesto`,`fecha_contratacion`,`telefono`) VALUES ('"+id+"','"+nom+"','"+ape+"','"+puesto+"','"+fecha+"','"+telefono+"');";
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
    resp.render('bajaEmpleado');
}
export const empMod=(pet, resp)=>{
    resp.render('modEmpleado');
}
export const empCons=(pet, resp)=>{
    resp.render('consEmpleado');
}