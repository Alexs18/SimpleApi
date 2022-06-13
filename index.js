const server = require('express');
const cors = require('cors');
const {RouterUser, RouterEmploye, Auth} = require('./src/routes/index');
const express = require('express');
const connectiondatabase = require('./src/database/index');
const cookieparse = require('cookie-parser')
let {TestToConecction} = require('./src/middleware/Authoritation');

const Api = server();

Api.get('/New', (req, res)=>{

    console.log(req.cookies);
    let {Id} = req.params;
    if (2>Id) {
        res.cookie('session', 'Linux', {httpOnly:true});
        res.send('La cookie fue agregada')
        
    }
})

Api.post('/Peticion/Cookie', (req, res)=>{
    console.log(req.cookies);
    
    if ("Linux" === res.cookie.session) {
        res.json({
            message:'you are rigth'
        })
    }
    else{
        res.json({
            message:'somethis was wrong'
        })
    }
})

Api.use(cors());
Api.use(cookieparse())
Api.use(express.json())
Api.use(express.urlencoded())
Api.use(RouterUser())
Api.use(RouterEmploye())
Api.use(Auth())


Api.listen(process.env.portapp, async ()=>{
    console.log(`we are running in the app ${process.env.application_name} for the poor ${process.env.portapp}`);
    await connectiondatabase();
});