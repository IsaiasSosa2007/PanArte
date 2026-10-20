import {conectar}from '../database/conexion.js';
const bdd=await conectar();
export const provAlta=(pet, resp)=>{
    resp.render('provAlta');
}
export const provNuevo=async(pet, resp)=>{
    //1: tomar contenido de los name
    //2: colocar esos name en el insert
    //3: ejecutar ese insert
    let nom, tel, direccion;
    nom=pet.body.empNom;
    tel=pet.body.empTel;
    dir=pet.body.empDir;

    try {
        let altasSQL= "INSERT INTO `proveedores`(`nombre_empresa`,`telefono`,`direccion`)VALUES('"+nom+"','"+tel+"','"+dir+"');";
        const [registro]=await bdd.query(altasSQL);
        resp.render('index');
        console.log(registro);
    } catch (error) {
        console.log(`error al crear la sentencia insert ${error}`);
    }
}
export const provMenu=(pet, resp)=>{
    resp.render('proveedores');
}
export const provBaja=(pet, resp)=>{
    resp.render('provBaja');
}
export const provMod=(pet, resp)=>{
    resp.render('provMod');
}
export const provCons=(pet, resp)=>{
    resp.render('provCons');
}
export const provMT=async(pet, resp)=>{
    try{
        let mostrarSQL="SELECT `id/nit`, nombre_empresa, telefono, direccion FROM panartev8.proveedores order by `id/nit`;";
        const [registros]=await bdd.query(mostrarSQL);
        resp.render('provMT', {registros});
    }catch(error){
        console.log('no puede mostrar los datos');
        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
    }
}