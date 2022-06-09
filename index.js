const server = require('express');
const cors = require('cors');
const {RouterUser, RouterEmploye} = require('./src/routes/index');
const express = require('express');
const connectiondatabase = require('./src/database/index');

const Api = server();
const ApiRouter = server.Router();

Api.use(cors());
Api.use(RouterUser())
Api.use(RouterEmploye())
Api.use(express.json())


Api.listen(8080, async ()=>{
    console.log(`we are running in the app ${process.env.application_name}`);
    await connectiondatabase();
});