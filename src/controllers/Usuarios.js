let connectiondatabase  = require('../database/index');
let Sql = require('mssql');
let GeneratorPassword = require('../Services/index');

async function getUsuarios(req, res) {
    try {
        let resultado =await connectiondatabase();
        let query = await resultado.request().query('SELECT * FROM Usuarios');
        res.json({
            data:query,
            status:200
        })   
    }catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

async function postUsuarios(req, res) {
    const {Nombre, Apellido, Edad, Rol} = req.body;
    let Usuario = `${Nombre}.${Apellido}`;
    let  {Pwdencrypt, pwdwithoutencrypt} = await GeneratorPassword.passwordRandom();
    try {
        let InsertData = await connectiondatabase();
        await InsertData.request()
            .input("Nombre", Sql.NChar, Nombre)
            .input("Apellido", Sql.NChar, Apellido)
            .input("Edad", Sql.NChar, Edad)
            .input("Rol", Sql.VarChar, Rol)
            .input("Usuario", Sql.VarChar, Usuario)
            .input("Contraseña", Sql.VarChar, Pwdencrypt)
            .query('INSERT INTO Usuarios (Nombre, Apellido, Edad, Rol, Usuario, Contraseña) Values (@Nombre, @Apellido, @Edad, @Rol, @Usuario, @Contraseña)');
    
        res.json({
            data:{
                Nombre, 
                Apellido,
                Edad,
                Rol,
                Usuario,
                contraseña: pwdwithoutencrypt
            },
            status:200,
            message:"user was add correctly",
        });
    } catch (error) {
        res.status(500);
        res.send({
            error:error.message
        })
    }
}

async function getOneByName(req, res) {
    
    try {
        let {Nombre} = req.params;
        let SearchByName = await connectiondatabase();
        let QueryResult = await SearchByName.request()
        .input("Nombre", Nombre)
        .query("SELECT * FROM Usuarios WHERE Nombre=@Nombre");
        res.json({
            query:QueryResult.recordset,
            status:200,
            message:"Your request was success"
        });
    } catch (error) {
        res.json({
            status:500,
            servererror: error.message,
            serverCliente: "Dato Invalido para su busqueda"
        })
    }

}

async function UpdateUser(req, res) {
    const {Id} = req.params;
    const {Nombre, Apellido, Edad} = req.body;
    try {
        
        let updatedata = await connectiondatabase();
        await updatedata.request()
        .input("Id", Sql.Int, Id)
        .input("Nombre", Sql.NChar, Nombre)
        .input("Apellido", Sql.NChar, Apellido)
        .input("Edad", Sql.NChar, Edad)
        .query("UPDATE Usuarios SET Nombre=@Nombre, Apellido=@Apellido, Edad=@Edad WHERE Id=@ID");
        res.json({
            message:"Data was update",
            status:200
        })

    } catch (error) {
        res.json({
            status:500,
            servererror: error.message,
            serverCliente: "Dato Invalido para su busqueda"
        })
    }
}

async function deleteUser(req, res) {
   let {Id} = req.params;
   try {
    
        let DeleteUser = await connectiondatabase();
        let resultdelete = await DeleteUser.request()
        .input("Id", Id)
        .query("DELETE FROM Usuarios where Id=@Id");
        res.json({
            message:"data was success delete",
            status:200
        })

   } catch (error) {
       res.json({
           status:500,
           serverError:error.message,
           serverCliente:"Datos Invalidos para la busqueda"
       })
   }   
}

module.exports = {
    getUser:getUsuarios,
    postUser:postUsuarios,
    getOneUser:getOneByName,
    deleteUser:deleteUser,
    UpdateUser:UpdateUser
}