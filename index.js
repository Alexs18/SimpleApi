const server = require('express');
const cors = require('cors');
const {RouterUser, RouterEmploye} = require('./src/routes/index');
const express = require('express');
const connectiondatabase = require('./src/database/index');

const Api = server();

Api.use(cors());
Api.use(express.json())
Api.use(express.urlencoded())
Api.use(RouterUser())
Api.use(RouterEmploye())



Api.listen(process.env.portapp, async ()=>{
    console.log(`we are running in the app ${process.env.application_name} for the poor ${process.env.portapp}`);
    await connectiondatabase();
});