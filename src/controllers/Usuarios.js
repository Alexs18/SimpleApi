let connectiondatabase  = require('../database/index');
let Sql = require('mssql');

async function getUsuarios(req, res) {
    let resultado =await connectiondatabase();
    let query = await resultado.request().query('SELECT * FROM Usuarios');
    res.json({
        data:'data was success'
    })
}

async function postUsuarios(req, res) {
    const data = await req.body;
    let InsertData = await connectiondatabase();
    let DataInserted = await InsertData.request()
        .input("Nombre", Sql.NChar, Nombre)
        .input("Apellido", Sql.NChar, Apellido)
        .input("Edad", Sql.NChar, Edad)
        .query('Insert into Usuarios (Nombre, Apellido, Edad) Values (@Nombre, @Apellido, @Edad)');
    res.json(DataInserted)
}

module.exports = {
    getUser:getUsuarios,
    postUser:postUsuarios
}