let routes = require('express');
let {getUser, postUser} = require('../controllers/Usuarios');

function RouterHome() {
 
    let router = routes.Router();
    router.get('/Usuarios', getUser);
    router.post('/Usuarios', postUser);
    router.post('/Linux', async(req, res)=>{
        console.log(req.body)
    });
    router.get('/LinuxDev', async(req, res)=>{
        res.send('linux dev');
    })
    return router
    
}

module.exports = RouterHome