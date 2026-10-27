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
export const ventNuevo=async(pet, resp)=>{
    let fecha, hora, total, subTotal, desc, cliId, empId;
    let date=new Date();
    fecha=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    hora=`${date.getHours()}:${date.getMinutes()}:00`;
    subTotal=Number(pet.body.ventSubTotal);
    desc=Number(pet.body.ventDesc);
    if(isNaN(desc)){ desc=0; }
    total=subTotal-subTotal*(desc/100);
    empId=parseInt(pet.body.ventEmpId);
    cliId=parseInt(pet.body.ventCliId);
    if(isNaN(cliId) || cliId===0){ cliId="NULL"; }
    try {
        let altasSQL="INSERT INTO `ventas`(`fecha`,`hora`,`total`,`sub_total`,`descuento`,`clientes_frecuentes_id`,`empleados_id`)VALUES('"+fecha+"','"+hora+"',"+total+","+subTotal+","+desc+","+cliId+","+empId+");";
        const [registro]=await bdd.query(altasSQL);
        resp.redirect('/ventas');
        console.log(registro);
    } catch (error) {
        console.log(`error al crear la sentencia insert ${error}`);
        resp.redirect('/ventas/alta');
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
        const consultaSQL=`SELECT id, fecha, hora, total, sub_total, descuento, empleados_id, clientes_frecuentes_id FROM ventas where id=${ventId};`;
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
        let mostrarSQL="SELECT id, fecha, hora, total, sub_total, descuento, empleados_id, clientes_frecuentes_id FROM ventas order by id;";
        const [registros]=await bdd.query(mostrarSQL);
        resp.render('ventMT', {registros});
    }catch(error){
        console.log('no puede mostrar los datos');
    }
}