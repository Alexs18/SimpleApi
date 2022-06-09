let mssql = require('mssql');
let configconnection = require('../config');

async function ConectionDatabase() {
    let ressultconection = await mssql.connect(configconnection);
    console.log("Conexión exitosa");
    return ressultconection;
}

module.exports = ConectionDatabase;
