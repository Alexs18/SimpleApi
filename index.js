const server = require('express');
const cors = require('cors');
const {RouterHome} = require('./src/routes/index');
const express = require('express');
const connectiondatabase = require('./src/connection/index');

const Api = server();

Api.use(cors());
Api.use(RouterHome())
Api.use(express.json())

Api.get('/', (req, res)=>{
    res.send('hola')
})

Api.listen(8080, async ()=>{
    console.log("estamos corriendo");
    await connectiondatabase();
});