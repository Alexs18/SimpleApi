let routers = require('express');
let {getEmpleados, postEmpleados} = require('../controllers/Empleados');

function RouteEmploye() {
    
    let router = routers();
    router.get('/Empleados', getEmpleados);
    router.get('/Empleados2', (req, res)=>{
        res.send("Linux2")
    });
    router.post('/AllEmployed', postEmpleados)
    return router

}

module.exports = RouteEmploye;