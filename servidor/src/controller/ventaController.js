import {conectar}from '../database/conexion.js';
const bdd=await conectar();
// async function obtenerProductos() {
//     try{
//     let productos_ID_SQL="select id, nombre, precio from productos order by id";
//     const [productos]=await bdd.query(productos_ID_SQL);
//     return {productos};
//     }
//     catch(error){console.log(error);
//         return
//     }
// } 
// obtenerProductos=async()=>{
//     try{
//     let productos_ID_SQL="select id, nombre, precio from productos order by id";
//     const [productos]=await bdd.query(productos_ID_SQL);
//     return {productos};
//     }
//     catch(error){console.log(error);
//         return
//     }
// }
export const ventAlta=(pet, resp)=>{
    // let productos_ID_SQL="select id, nombre, precio from panartev1.productos order by id";
    // const [productos]=await bdd.query(productos_ID_SQL);
    // try{
    // let productos=obtenerProductos();
    // console.log(productos);
    resp.render('ventAlta');//, {productos});}
    // catch(error){console.log(error);
    // }
}
export const ventNuevo=async(pet, resp)=>{
    let fecha, hora, total, cantProd, precioUniAct, subTotal, desc, cliDni, prodId, empId;
    // fecha=pet.body.ventFehca;
    // hora=pet.body.ventHora;
    // total=pet.body.ventTotal;
    cantProd=pet.body.ventCantProd;
    // precioUniAct=pet.body.ventPrecioUniAct;
    // subTotal
    // desc
    // cliDni
    prodId=pet.body.ventProdId;
    empId=pet.body.ventEmpId;

    try {
        let altasSQL= "INSERT INTO `ventas`(`fecha`,`hora`,`total`,`cantidad_productos`,`precio_unit_actual`,`sub_total`,`descuento`,`clientes_frecuentes_id`,`empleados_id`,`productos_id`)VALUES('"+fecha+"','"+hora+"','"+total+"','"+subTotal+"','"+cantProd+"','"+precioUniAct+"','"+subTotal+"','"+desc+"','"+cliDni+"','"+prodId+"', '"+empId+"');";
        const [registro]=await bdd.query(altasSQL);
        resp.render('index');
        console.log(registro);
    } catch (error) {
        console.log(`error al crear la sentencia insert ${error}`);
    }
}
export const ventMenu=(pet, resp)=>{
    resp.render('ventas');
}
export const ventBaja=(pet, resp)=>{
    resp.render('ventBaja');
}
export const ventMod=(pet, resp)=>{
    resp.render('ventMod');
}
export const ventCons=(pet, resp)=>{
    resp.render('ventCons');
}