// import {conectar}from '../database/conexion.js';
// const bdd=await conectar();
export const pedAlta=(pet, resp)=>{
    resp.render('pedAlta');
}
export const pedNuevo=async(pet, resp)=>{
    let fecha, hora, total, fechaEnt, horaEnt, cantProd, precioUniAct, subTotal, desc, cliId, prodId, empId;
    fecha=pet.body.pedFecha;
    hora=pet.body.pedHora;
    fechaEnt
    horaEnt
    estadoPed
    total=pet.body.pedTotal;
    cantProd=pet.body.pedCantProd;
    precioUniAct=pet.body.pedPrecioUniAct;
    subTotal
    desc
    cliId
    prodId=pet.body.pedProdId;
    empId=pet.body.pedEmpId;
    try {
        let altasSQL= "INSERT INTO `pedidos`(`fecha_pedido`,`hora_pedido`,`total`,`cantidad_productos`,`fecha_entrega`,`hora_entrega`,`estado_pedido`,`sub_total`,`descuento`,`clientes_frecuentes_id`,`empleados_id`,`productos_id`)VALUE('"+fecha+"','"+hora+"','"+fechaEnt+"','"+horaEnt+"','"+estadoPed+"','"+total+"','"+cantProd+"','"+precioUniAct+"','"+subTotal+"','"+desc+"','"+cliId+"','"+prodId+"','"+empId+"');";
        const [registro]=await bdd.query(altasSQL);
        resp.render('index');
        console.log(registro);
    } catch (error) {
        console.log(`error al crear la sentencia insert ${error}`);
    }
}
export const pedMenu=(pet, resp)=>{
    resp.render('pedidos');
}
export const pedBaja=(pet, resp)=>{
    resp.render('pedBaja');
}
export const pedMod=(pet, resp)=>{
    resp.render('pedMod');
}
export const pedCons=(pet, resp)=>{
    resp.render('pedCons');
}