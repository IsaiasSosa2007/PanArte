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
    let date=new Date();
    cantProd=pet.body.ventCantProd;
    prodId=pet.body.ventProdId;
    empId=pet.body.ventEmpId;
    cliDni=pet.body.ventCliDni;
    //precioUniAct=precio que del producto, que lo traemos con su id
    fecha=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    hora=`${date.getHours()}:${date.getMinutes()}:00`
    subTotal=precioUniAct*cantProd;
    total=subTotal-(subTotal*(desc/100));
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
export const ventMT=async(pet, resp)=>{
    try{
        let mostrarSQL="SELECT id_factura, fecha, hora, total, cantidad_productos, precio_unit_actual, sub_total, descuento, clientes_frecuentes_id, productos_id, empleados_id FROM panartev8.ventas order by id_factura;";
        const [registros]=await bdd.query(mostrarSQL);
        resp.render('ventMT', {registros});
    }catch(error){
        console.log('no puede mostrar los datos');
    }
}