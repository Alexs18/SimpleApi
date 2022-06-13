let router = require('express');

let api = router();

api.get('/', (req, res)=>{
    res.send('linux')
})

api.use(router.json());

api.post('/Home', async (req, res)=>{
    let {Nombre} = req.body;
    console.log(Nombre);
    res.json({
        data:'success'
    })

})

api.listen(8080, ()=>{
    console.log("We are running");
});