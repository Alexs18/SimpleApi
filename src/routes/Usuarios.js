let routes = require('express');
let {getUser} = require('../Controllers/index');

function RouterHome() {
 
    let router = routes.Router();
    router.get('/Home', getUser);
    return router
    
}

module.exports = RouterHome