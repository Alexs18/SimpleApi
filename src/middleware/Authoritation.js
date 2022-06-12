let connectiondatabase  = require('../database/index');

async function Auth(req, res) {
    let Pool = await connectiondatabase();
    let Query = await Pool.request().query('SELECT * FROM Usuarios');
    res.status(200)
    .json(Query)
}

async function Authoritation(req, res) {
    const {Rol} = req.body;
    let Pool = await connectiondatabase();
    let resultado  = await Pool.request()
    .input("Rol", Rol)
    .query('SELECT * FROM Usuarios Where Rol = @Rol');
    if (resultado.recordset.length >= 1) {
        if (resultado.recordset[0].Rol === 'admin') {
            res.status(200)
            .json({
                message:'this is was success'
            });        
        }else{
            res.status(401)
            .json({
                message:'this is a great mistake'
            })
        }
    }
    else{
        res.json({mesasge:'mistake'})
    }
}


module.exports = {
    Auth:Auth,
    Authoritation:Authoritation
}