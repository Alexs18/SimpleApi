let routers = require('express');
let {getEmpleados, postEmpleados,getOneEmpleados, deleteEmploye, UpdateEmploye} = require('../controllers/Empleados');

function RouteEmploye() {
    
    let router = routers();
    router.get('/Empleados', getEmpleados);
    router.post('/AllEmployed', postEmpleados);
    router.get('/Empleados/:Estado_Vacunacion', getOneEmpleados);
    router.delete('/Empleados/:Id', deleteEmploye);
    router.put('/Empleados/:Id', UpdateEmploye);
    return router

}

module.exports = RouteEmploye;