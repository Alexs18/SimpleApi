let connectiondatabase  = require('../database/index');
let Sql = require('mssql');

async function getEmpleados(req, res) {
    let resultado =await connectiondatabase();
    let query = await resultado.request().query('SELECT * FROM Empleados');
    res.json(query)
}

async function postEmpleados(req, res) {
    const data = await req.body;
    console.log(data);
    res.json({
        data:'was success',
        data:data
    })
}

module.exports = {
    getEmpleados:getEmpleados,
    postEmpleados:postEmpleados
}