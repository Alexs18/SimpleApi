let routers = require('express');
let {getEmpleados, postEmpleados} = require('../controllers/Empleados');

function RouteEmploye() {
    
    let router = routers();
    router.get('/Empleados', getEmpleados);
    router.post('/AllEmployed', postEmpleados)
    return router

}

module.exports = RouteEmploye;