let connectiondatabase  = require('../database/index');
let bcrypt = require('bcrypt');
let ServiceAuth = require('../Services/Auth');

async function Login(req, res) {
    let {Usuario, Contraseña} = req.body;

    let Pool = await connectiondatabase();
    let result = await Pool.request()
    .input("Usuario", Usuario)
    .query("SELECT * FROM Usuarios WHERE Usuario= @Usuario");
    let passwordverifi = result.recordset[0].Contraseña;
    let ValidationPassword = await bcrypt.compare(Contraseña, passwordverifi)
    if (ValidationPassword) {
        let token = await ServiceAuth(result.recordset[0]);
        res.cookie("TokenLogin", token);
        res.json({
            message:"Login was success"
        })
    }else{
        res.json({
            message:'somethig was wrong'
        })
    }

}

async function Logout(req, res) {

    let {TokenLogin} = req.cookies;
    if (TokenLogin) {
        res.clearCookie("TokenLogin");
        res.status(200).json({
            message:"Sesion cerrada exitosamente"
        })
    }else{
        res.status(200).json({
            message:"Actualmente no tiene una sesion activa"
        })
    }
}

module.exports = {
    Login:Login,
    Logout:Logout
}