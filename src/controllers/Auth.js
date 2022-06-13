let connectiondatabase  = require('../database/index');
let bcrypt = require('bcrypt');

async function Login(req, res) {
    let {Usuario, Contraseña} = req.body;

    let Pool = await connectiondatabase();
    let result = await Pool.request()
    .input("Usuario", Usuario)
    .query("SELECT * FROM Usuarios WHERE Usuario= @Usuario");
    let passwordverifi = result.recordset[0].Contraseña;
    let ValidationPassword = await bcrypt.compare(Contraseña, passwordverifi)
    if (ValidationPassword) {
        res.json({
            message:"Login was success"
        })
    }else{
        res.json({
            message:'somethig was wrong'
        })
    }

}

module.exports = {
    Login:Login
}