import {conectar}from '../database/conexion.js';
const bdd=await conectar();
export const ingAlta=(pet, resp)=>{
    resp.render('ingAlta');
}
export const ingNuevo=async(pet, resp)=>{
    let nom, cantStock, unidadMedida, ingStock, categ
    nom=pet.body.ingNom;
    cantStock=pet.body.ingCantStock;
    unidadMedida=pet.body.ingUnidadMedida;
    idProv=pet.body.ingIdProv;
    try {
        let altasSQL= "INSERT INTO `ingredientes`(`nombre`,`cantidad_stock`,`unidad_medida`,`proveedores_id/nit`)VALUES('"+nom+"','"+cantStock+"','"+unidadMedida+"','"+idProv+"');";
        const [registro]=await bdd.query(altasSQL);
        resp.render('index');
        console.log(registro);
    } catch (error) {
        console.log(`error al crear la sentencia insert ${error}`);
    }
}
export const ingMenu=(pet, resp)=>{
    resp.render('ingredientes');
}
export const ingBaja=(pet, resp)=>{
    resp.render('ingBaja');
}
export const ingMod=(pet, resp)=>{
    resp.render('ingMod');
}
export const ingCons=(pet, resp)=>{
    resp.render('ingCons');
}
export const ingMT=async(pet, resp)=>{
    try{
        let mostrarSQL="SELECT id, nombre, cantidad_stock, unidad_medida, `proveedores_id/nit` FROM panartev8.ingredientes order by id;";
        const [registros]=await bdd.query(mostrarSQL);
        resp.render('ingMT', {registros});
    }catch(error){
        console.log('no puede mostrar los datos');
    }
}