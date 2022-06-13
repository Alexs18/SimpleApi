let routers = require('express');
let {Auth, Authoritation, TestToConecction} = require('../middleware/Authoritation');
let {getEmpleados, postEmpleados,getOneEmpleados, deleteEmploye, UpdateEmploye} = require('../controllers/Empleados');

function RouteEmploye() {
    
    let router = routers();
    router.get('/Empleados', getEmpleados);
    router.post('/AllEmployed', postEmpleados);
    router.get('/Empleados/:Estado_Vacunacion', getOneEmpleados);
    router.delete('/Empleados/:Id', deleteEmploye);
    router.put('/Empleados/:Id', UpdateEmploye);
    router.get('/Autoriza', Auth);
    router.post('/Autoriza', Authoritation)
    return router

}

module.exports = RouteEmploye;