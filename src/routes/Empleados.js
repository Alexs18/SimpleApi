let routers = require('express');
let {getEmpleados, postEmpleados,getOneEmpleados} = require('../controllers/Empleados');

function RouteEmploye() {
    
    let router = routers();
    router.get('/Empleados', getEmpleados);
    router.post('/AllEmployed', postEmpleados);
    router.get('/Empleados/:Estado_Vacunacion', getOneEmpleados);

    return router

}

module.exports = RouteEmploye;