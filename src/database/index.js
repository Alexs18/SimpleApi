let mssql = require('mssql');
let configconnection = require('../config');

async function ConectionDatabase() {
    try {
        let ressultconection = await mssql.connect(configconnection);
        console.log("Conection with database was success");
        return ressultconection;   
    } catch (error) {
        console.log(error)
    }
}

module.exports = ConectionDatabase;
