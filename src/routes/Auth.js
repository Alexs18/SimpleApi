let {Router} = require('express');
let {Login, Logout} = require('../controllers/Auth');

function AuthRouter() {
    
    let Route = Router();

    Route.post("/Login",Login);
    Route.get("/Logout", Logout)

    return Route

}

module.exports = AuthRouter;