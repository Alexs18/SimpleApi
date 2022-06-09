let routes = require('express');

function RouterHome() {
 
    let router = routes.Router();

    router.get('/Home', (req, res)=>{
        res.send("Its is my home");
    });
    return router
    
}

module.exports = RouterHome