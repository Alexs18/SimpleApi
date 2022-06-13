let {Router} = require('express');
let {Login} = require('../controllers/Auth');

function AuthRouter() {
    
    let Route = Router();

    Route.post("/Login",Login);

    return Route

}

module.exports = AuthRouter;