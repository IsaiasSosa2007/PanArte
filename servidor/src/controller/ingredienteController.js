import {conectar}from '../database/conexion.js';
const bdd=await conectar();
export const ingAlta=(pet, resp)=>{
    resp.render('ingAlta');
}
export const ingNuevo=async(pet, resp)=>{
    let nom, cantStock, unidadMedida, idProv;
    nom=pet.body.ingNom;
    cantStock=pet.body.ingCant;
    unidadMedida=pet.body.ingUniMed;
    idProv=pet.body.ingProv;
    try {
        let altasSQL= "INSERT INTO `ingredientes`(`nombre`,`cantidad_stock`,`unidad_medida`,`proveedores_id_nit`)VALUES('"+nom+"','"+cantStock+"','"+unidadMedida+"','"+idProv+"');";
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
export const ingBusq=async(pet, resp)=>{
    try{
        let ingId=parseInt(pet.params.ingBusq);
        const consultaSQL=`SELECT id, nombre, cantidad_stock, unidad_medida, proveedores_id_nit FROM ingredientes where id=${ingId};`;
        const [busqueda]=await bdd.query(consultaSQL);
        console.log(busqueda);
        resp.render('ingCons', {busqueda});
    }
    catch(error){
        console.log("No se pudo realizar la consulta"+error);
        resp.render('ingCons', {busqueda: null});
    }
}
export const ingCons=(pet, resp)=>{
        resp.render('ingCons', {busqueda: null});
}
export const ingMT=async(pet, resp)=>{
    try{
        let mostrarSQL="SELECT id, nombre, cantidad_stock, unidad_medida, proveedores_id_nit FROM ingredientes order by id;";
        const [registros]=await bdd.query(mostrarSQL);
        resp.render('ingMT', {registros});
    }catch(error){
        console.log('no puede mostrar los datos');
    }
}