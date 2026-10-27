import {conectar}from '../database/conexion.js';
const bdd=await conectar();
export const pedAlta=(pet, resp)=>{
    resp.render('pedAlta');
}
export const pedNuevo=async(pet, resp)=>{
    let fechaPed, horaPed, total, fechaEnt, horaEnt, estadoPed, subTotal, desc, cliId, empId;
    let date=new Date();
    fechaPed=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    horaPed=`${date.getHours()}:${date.getMinutes()}:00`
    fechaEnt=pet.body.pedFechaEnt;
    horaEnt=pet.body.pedHoraEnt;
    horaEnt=`${horaEnt}:00`;
    estadoPed="Pendiente";
    subTotal=Number(pet.body.pedSubTotal);
    desc=Number(pet.body.pedDesc);
    if(isNaN(desc)){ desc=0; }
    cliId=parseInt(pet.body.pedCliId);
    if(isNaN(cliId) || cliId===0){
        cliId="NULL";
        desc=0;
    }
    total=subTotal-subTotal*(desc/100);
    empId=parseInt(pet.body.pedEmp);
    try {
        let altasSQL= "INSERT INTO `pedidos`(`fecha_pedido`,`hora_pedido`,`total`,`fecha_entrega`,`hora_entrega`,`estado_pedido`,`sub_total`,`descuento`,`clientes_frecuentes_id`,`empleados_id`)VALUES('"+fechaPed+"','"+horaPed+"',"+total+",'"+fechaEnt+"','"+horaEnt+"','"+estadoPed+"',"+subTotal+","+desc+","+cliId+","+empId+");";
        const [registro]=await bdd.query(altasSQL);
        resp.redirect('/pedidos');
        console.log(registro);
    } catch (error) {
        console.log(`error al crear la sentencia insert ${error}`);
        console.log(error);
        resp.status(500).send("No se pudo guardar el pedido");
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
export const pedBusq=async(pet, resp)=>{
    try{
        let pedId=parseInt(pet.params.pedBusq);
        const consultaSQL=`SELECT id, fecha_pedido, hora_pedido, total, fecha_entrega, hora_entrega, estado_pedido, sub_total, descuento, empleados_id, clientes_frecuentes_id FROM pedidos where id=${pedId};`;
        const [busqueda]=await bdd.query(consultaSQL);
        console.log(busqueda);
        resp.render('pedCons', {busqueda});
    }
    catch(error){
        console.log("No se pudo realizar la consulta"+error);
        resp.render('pedCons', {busqueda: null});
    }
}
export const pedCons=(pet, resp)=>{
        resp.render('pedCons', {busqueda: null});
}
export const pedMT=async(pet, resp)=>{
    try{
        let mostrarSQL="SELECT id, fecha_pedido, hora_pedido, total, fecha_entrega, hora_entrega, estado_pedido, sub_total, descuento, empleados_id, clientes_frecuentes_id FROM pedidos order by id;";
        const [registros]=await bdd.query(mostrarSQL);
        resp.render('pedMT', {registros});
    }catch(error){
        console.log('no puede mostrar los datos');
        resp.render('pedMT', {registros: []});
    }
}