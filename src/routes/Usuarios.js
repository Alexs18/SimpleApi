let routes = require('express');
let {getUser, postUser, getOneUser} = require('../controllers/Usuarios');

function RouterHome() {
 
    let router = routes.Router();
    
    router.get('/Usuarios', getUser);
    router.post('/Usuarios', postUser);
    router.get('/Usuarios/:Nombre', getOneUser);
   
    return router
    
}

module.exports = RouterHome