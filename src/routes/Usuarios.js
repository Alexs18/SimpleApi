let routes = require('express');
let {getUser, postUser} = require('../controllers/Usuarios');

function RouterHome() {
 
    let router = routes.Router();
    
    router.get('/Usuarios', getUser);
    router.post('/Usuarios', postUser);
   
    return router
    
}

module.exports = RouterHome