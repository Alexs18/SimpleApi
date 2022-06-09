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
    const linux = await req.body;
    res.statuscode = 200;
    console.log(linux);
    res.json({
        data:'was success'
    })
}

module.exports = {
    getUser:getUsuarios,
    postUser:postUsuarios
}