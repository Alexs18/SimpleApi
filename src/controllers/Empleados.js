let connectiondatabase  = require('../database/index');
let Sql = require('mssql');
let {SimpleQuery} = require('../database/Queris');

async function getEmpleados(req, res) {
    try {
        let resultado =await connectiondatabase();
        let query = await resultado.request().query(SimpleQuery);
        res.json({
            data:query.recordset,
            status:200
        });     
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
   
}

async function postEmpleados(req, res) {
    const {Fecha_Nacimiento, Domicilio, Telefono, Estado_Vacunacion} = await req.body;
    try {
        let InsertData = await connectiondatabase();
        await InsertData.request()
        .input("Fecha_Nacimiento", Sql.DateTime, Fecha_Nacimiento)
        .input("Domicilio", Sql.VarChar, Domicilio)
        .input("Telefono", Sql.Numeric, Telefono)
        .input("Estado_Vacunacion", Sql.Bit, Estado_Vacunacion)
        .query("INSERT INTO Empleados (Fecha_Nacimiento, Domicilio, Telefono, Estado_Vacunacion) VALUES (@Fecha_Nacimiento, @Domicilio, @Telefono, @Estado_Vacunacion)");

        res.json({
            data:{
                Fecha_Nacimiento,
                Domicilio,
                Telefono,
                Estado_Vacunacion
            }
        });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

async function getOneEmpleados(req, res) {
    let {Estado_Vacunacion} = req.params;
    try {
        let SearchStateVaccine = await connectiondatabase();
        let Query = await SearchStateVaccine.request()
        .input("Estado_Vacunacion",Estado_Vacunacion)
        .query("SELECT * FROM Empleados WHERE Estado_Vacunacion=@Estado_Vacunacion");
        res.json({
            Query,
            Status:200,
            message:"yor shear was success",
            params:Estado_Vacunacion
        });   
    } catch (error) {
        res.json({
            errorserver:error.message,
            status:500,
            errorparams:"Parametro Invalido"
        });
    }
}

async function UpdateEmploye(req, res) {
    
    const {Id} = req.params;
    const {Fecha_Nacimiento,Domicilio,Telefono,Estado_Vacunacion} = req.body;

    try {
        let query = await connectiondatabase();
        let changevalue = await query.request()
        .input("EmpleadosID", Sql.Int, Id)
        .input("Fecha_Nacimiento", Sql.DateTime, Fecha_Nacimiento)
        .input("Domicilio", Sql.VarChar, Domicilio)
        .input("Telefono", Sql.Numeric, Telefono)
        .input("Estado_Vacunacion", Sql.Bit, Estado_Vacunacion)
        .query(`UPDATE Empleados SET Fecha_Nacimiento=@Fecha_Nacimiento,
            Domicilio= @Domicilio, Telefono = @Telefono, Estado_Vacunacion = @Estado_Vacunacion WHERE EmpleadosID =@EmpleadosID`);
        res.json({
            status:200,
            message:"your data was update success"
        });   
    } catch (error) {
        res.json({
            status:500,
            servererrror:error.message,
            clienterror: "Data es Invalida"
        })
    }


}

async function deleteEmploye(req, res) {

    let {Id} = req.params;

    try {
        let UserDelete = await connectiondatabase();
        await UserDelete.request()
        .input("EmpleadosID", Id)
        .query("DELETE FROM Empleados WHERE EmpleadosID=@EmpleadosID");    
        res.json({
            Status:200,
            message:"Employe was dele success",
        });  

    } catch (error) {
        res.json({
            errorserver:error.message,
            status:500,
            errorparams:"Parametro Invalido"
        });
    }
}

module.exports = {
    getEmpleados:getEmpleados,
    postEmpleados:postEmpleados,
    getOneEmpleados:getOneEmpleados,
    deleteEmploye:deleteEmploye,
    UpdateEmploye:UpdateEmploye
}