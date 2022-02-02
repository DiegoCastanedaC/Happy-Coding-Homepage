
const express = require('express');
const app = express();


const rutasMain =require("./routers/mainRouters.js") //Se conecta con el archivo routers
app.set('view engine', 'ejs')// configura express para motor de plantilla para las vistas de la aplicacion 
app.use(express.static('public'));


app.listen(3001, ()=>{
    console.log('Servidor funcionando');
});

//Rutas del Main
app.use("/",rutasMain)





// app.get("/construccion",(req, res) =>{
//     res.sendFile(__dirname + "/views/construccion.html")
// })



// app.get("/tshirts",(req, res) =>{
//     res.sendFile(__dirname + "/views/tshirts.html")
// })