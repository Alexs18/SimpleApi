let routers = require('express');
let {getEmpleados, postEmpleados,getOneEmpleados, deleteEmploye} = require('../controllers/Empleados');

function RouteEmploye() {
    
    let router = routers();
    router.get('/Empleados', getEmpleados);
    router.post('/AllEmployed', postEmpleados);
    router.get('/Empleados/:Estado_Vacunacion', getOneEmpleados);
    router.delete('/Empleados/:Id', deleteEmploye);

    return router

}

module.exports = RouteEmploye;