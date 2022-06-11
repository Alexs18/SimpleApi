let connectiondatabase  = require('../database/index');
let Sql = require('mssql');
let {SimpleQuery} = require('../database/Queris');

async function getEmpleados(req, res) {
    let resultado =await connectiondatabase();
    let query = await resultado.request().query(SimpleQuery);
    res.json(query)
}

async function postEmpleados(req, res) {
    const {EmpleadosID, Fecha_Nacimiento, Domicilio, Telefono, Estado_Vacunacion} = await req.body;
    console.log(req.body)
    let InsertData = await connectiondatabase();
    let DataInserted = await InsertData.request()
        .input("EmpleadosID", Sql.Int, EmpleadosID)
        .input("Fecha_Nacimiento", Sql.DateTime, Fecha_Nacimiento)
        .input("Domicilio", Sql.VarChar, Domicilio)
        .input("Telefono", Sql.Numeric , Telefono)
        .input("Estado_Vacunacion", Sql.Bit, Estado_Vacunacion)
        .query('Insert into Usuarios (EmpleadosID, Fecha_Nacimiento, Domicilio, Telefono, Estado_Vacunacion) Values (@EmpleadosID, @Fecha_Nacimiento, @Domicilio, @Telefono, @Estado_Vacunacion)');
    res.json(DataInserted)
}

module.exports = {
    getEmpleados:getEmpleados,
    postEmpleados:postEmpleados
}