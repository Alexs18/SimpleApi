let connectiondatabase  = require('../connection/index');

async function getUsuarios(req, res) {
    let resultado =await connectiondatabase();
    let query = await resultado.request().query('SELECT * FROM Usuarios');
    res.json(query)
}
module.exports = {
    getUser:getUsuarios
}