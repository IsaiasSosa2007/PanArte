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
    let fecha, hora, total, cantProd, precioUniAct, subTotal, desc, cliId, prodId, empId;
    let date=new Date();
    fecha=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    hora=`${date.getHours()}:${date.getMinutes()}:00`;
    cantProd=pet.body.ventCantProd;
    precioUniAct=pet.body.ventPrecioUniAct;
    desc=pet.body.ventDesc;
    subTotal=cantProd*precioUniAct;
    total=subTotal-subTotal*(desc/100);


    prodId=pet.body.ventProdId;
    empId=pet.body.ventEmpId;
    cliId=pet.body.ventCliId;
    //precioUniAct=precio que del producto, que lo traemos con su id
    try {
        let altasSQL= "INSERT INTO `ventas`(`fecha`,`hora`,`total`,`cantidad_productos`,`precio_unit_actual`,`sub_total`,`descuento`,`clientes_frecuentes_id`,`empleados_id`,`productos_id`)VALUES('"+fecha+"','"+hora+"','"+total+"','"+cantProd+"','"+precioUniAct+"','"+subTotal+"','"+desc+"','"+cliId+"','"+prodId+"', '"+empId+"');";
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
export const ventBusq=async(pet, resp)=>{
    try{
        let ventId=parseInt(pet.params.ventBusq);
        const consultaSQL=`SELECT id_factura, fecha, hora, total, cantidad_productos, precio_unit_actual, sub_total, descuento, clientes_frecuentes_id, productos_id, empleados_id FROM ventas where id_factura=${ventId};`;
        const [busqueda]=await bdd.query(consultaSQL);
        console.log(busqueda);
        resp.render('ventCons', {busqueda});
    }
    catch(error){
        console.log("No se pudo realizar la consulta"+error);
        resp.render('ventCons', {busqueda: null});
    }
}
export const ventCons=(pet, resp)=>{
        resp.render('ventCons', {busqueda: null});
}
    /*form action : "/ruta/:(parametro)
    ruta: /ruta/:parametro--->el parametro se conecta con el "name" asignado al input
    ruta con dos cosas de consuta
    /ruta/:parametro1/parametro2

    export const ventCons=(pet, resp)=>{
        let ventId=pet.params.parametro}
        const [consulta, format]= `SELECT id, dni, nombre, apellido, telefono, email, descuento FROM clientes_frecuentes where id=${ventId};`
    */
export const ventMT=async(pet, resp)=>{
    try{
        let mostrarSQL="SELECT id_factura, fecha, hora, total, cantidad_productos, precio_unit_actual, sub_total, descuento, clientes_frecuentes_id, productos_id, empleados_id FROM panartev8.ventas order by id_factura;";
        const [registros]=await bdd.query(mostrarSQL);
        resp.render('ventMT', {registros});
    }catch(error){
        console.log('no puede mostrar los datos');
    }
}