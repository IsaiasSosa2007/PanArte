import {conectar}from '../database/conexion.js';
const bdd=await conectar();
export const pedAlta=(pet, resp)=>{
    resp.render('pedAlta');
}
export const pedNuevo=async(pet, resp)=>{
    let fechaPed, horaPed, total, fechaEnt, horaEnt, cantProd, estadoPed, subTotal, desc, cliId, prodId, empId;
    let date=new Date();
    fechaPed=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    horaPed=`${date.getHours()}:${date.getMinutes()}:00`
    fechaEnt=pet.body.pedFechaEnt;
    horaEnt=pet.body.pedHoraEnt;
    horaEnt=`${horaEnt}:00`;
    estadoPed="Pendiente";
    cantProd=pet.body.pedCantProd;
    subTotal=pet.body.pedSubTotal;
    desc=pet.body.pedDesc;
    cliId=pet.body.pedCliId;
    if(cliId==0){
        cliId=null;
        desc=0;
    }
    total=subTotal-subTotal*(desc/100);
    prodId=pet.body.pedProd;
    empId=pet.body.pedEmp;
    try {
        let altasSQL= "INSERT INTO `pedidos`(`fecha_pedido`,`hora_pedido`,`total`,`cantidad_productos`,`fecha_entrega`,`hora_entrega`,`estado_pedido`,`sub_total`,`descuento`,`clientes_frecuentes_id`,`empleados_id`,`productos_id`)VALUE('"+fechaPed+"','"+horaPed+"', '"+total+"', '"+cantProd+"','"+fechaEnt+"','"+horaEnt+"','"+estadoPed+"','"+subTotal+"','"+desc+"','"+cliId+"','"+empId+"','"+prodId+"');";
        const [registro]=await bdd.query(altasSQL);
        resp.render('index');
        console.log(registro);
    } catch (error) {
        console.log(`error al crear la sentencia insert ${error}`);
        console.log(error);
        resp.status(500).send("No se pudieron mostrar los datos");
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
export const pedMT=async(pet, resp)=>{
    try{
        let mostrarSQL="SELECT id_pedido, fecha_pedido, hora_pedido, total, cantidad_productos, fecha_entrega, hora_entrega, estado_pedido, sub_total, descuento, clientes_frecuentes_id, empleados_id, productos_id FROM panartev8.pedidos order by id_pedido;";
        const [registros]=await bdd.query(mostrarSQL);
        resp.render('pedMT', {registros});
    }catch(error){
        console.log('no puede mostrar los datos');
    }
}