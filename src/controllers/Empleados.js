let connectiondatabase  = require('../database/index');
let Sql = require('mssql');
let {SimpleQuery} = require('../database/Queris');

async function getEmpleados(req, res) {
    try {
        let resultado =await connectiondatabase();
        let query = await resultado.request().query(SimpleQuery);
        res.json({
            data:query,
            status:200
        });     
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
   
}

async function postEmpleados(req, res) {
    const {Fecha_Nacimiento, Domicilio, Telefono, Estado_Vacunacion} = await req.body;
    try {
        let InsertData = await connectiondatabase();
        await InsertData.request()
        .input("Fecha_Nacimiento", Sql.DateTime, Fecha_Nacimiento)
        .input("Domicilio", Sql.VarChar, Domicilio)
        .input("Telefono", Sql.Numeric, Telefono)
        .input("Estado_Vacunacion", Sql.Bit, Estado_Vacunacion)
        .query("INSERT INTO Empleados (Fecha_Nacimiento, Domicilio, Telefono, Estado_Vacunacion) VALUES (@Fecha_Nacimiento, @Domicilio, @Telefono, @Estado_Vacunacion)");

        res.json({
            data:{
                Fecha_Nacimiento,
                Domicilio,
                Telefono,
                Estado_Vacunacion
            }
        });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

module.exports = {
    getEmpleados:getEmpleados,
    postEmpleados:postEmpleados
}