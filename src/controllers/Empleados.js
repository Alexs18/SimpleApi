let connectiondatabase  = require('../database/index');
let Sql = require('mssql');

async function getEmpleados(req, res) {
    let resultado =await connectiondatabase();
    let query = await resultado.request().query('SELECT * FROM Empleados');
    res.json(query)
}

module.exports = {
    getEmpleados:getEmpleados
}