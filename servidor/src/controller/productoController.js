import {conectar}from '../database/conexion.js';
const bdd=await conectar();
export const prodAlta=(pet, resp)=>{
    resp.render('prodAlta');
}
export const prodNuevo=async(pet, resp)=>{
    let nom, desc, prec, prodStock, categ
    nom=pet.body.prodNom;
    desc=pet.body.prodDesc;
    prec=pet.body.prodPrec;
    prodStock=pet.body.prodStock;
    categ=pet.body.prodCat;
    try {
        let altasSQL= "INSERT INTO `productos`(`nombre`,`descripcion`,`precio`,`productos_stock`,`categoria`)VALUES('"+nom+"','"+desc+"','"+prec+"','"+prodStock+"','"+categ+"');";
        const [registro]=await bdd.query(altasSQL);
        resp.render('index');
        console.log(registro);
    } catch (error) {
        console.log(`error al crear la sentencia insert ${error}`);
    }
}
export const prodMenu=(pet, resp)=>{
    resp.render('productos');
}
export const prodBaja=(pet, resp)=>{
    resp.render('prodBaja');
}
export const prodMod=(pet, resp)=>{
    resp.render('prodMod');
}
export const prodBusq=async(pet, resp)=>{
    try{
        let prodId=parseInt(pet.params.prodBusq);
        const consultaSQL=`SELECT id, nombre, descripcion, precio, productos_stock, categoria FROM productos where id=${prodId};`;
        const [busqueda]=await bdd.query(consultaSQL);
        console.log(busqueda);
        resp.render('prodCons', {busqueda});
    }
    catch(error){
        console.log("No se pudo realizar la consulta"+error);
        resp.render('prodCons', {busqueda: null});
    }
}
export const prodCons=(pet, resp)=>{
        resp.render('prodCons', {busqueda: null});
}
export const prodMT=async(pet, resp)=>{
    try{
        let mostrarSQL="SELECT id, nombre, descripcion, precio, productos_stock, categoria FROM panartev8.productos order by id;";
        const [registros]=await bdd.query(mostrarSQL);
        resp.render('prodMT', {registros});
    }catch(error){
        console.log('no puede mostrar los datos');
    }
}