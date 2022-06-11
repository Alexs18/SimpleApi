let routes = require('express');
let {getUser, postUser, getOneUser, deleteUser,UpdateUser} = require('../controllers/Usuarios');

function RouterHome() {
 
    let router = routes.Router();
    
    router.get('/Usuarios', getUser);
    router.post('/Usuarios', postUser);
    router.get('/Usuarios/:Nombre', getOneUser);
    router.delete('/Usuarios/:Id', deleteUser);
    router.put('/Usuarios/:Id', UpdateUser);
   
    return router
    
}

module.exports = RouterHome