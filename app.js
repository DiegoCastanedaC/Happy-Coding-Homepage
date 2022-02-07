
const express = require('express');
const app = express();


const rutasMain =require("./routers/mainRouters.js") //Se conecta con el archivo routers
const rutasUser =require("./routers/userRouters.js") //Se conecta con el archivo routers
app.set('view engine', 'ejs')// configura express para motor de plantilla para las vistas de la aplicacion 
app.use(express.static('public'));
app.use(express.urlencoded({extended:false})); //configruacion previo para post campurar el formulario en objesto lierrio, si no colcoamos esto no podemos capturar formulario 
app.use(express.json()); //configruacion previo para post

app.listen(process.env.PORT||3001, function() {
    console.log('Servidor funcionando');
});

//Rutas del Main
app.use("/",rutasMain)
app.use("/user/",rutasUser)




// app.get("/construccion",(req, res) =>{
//     res.sendFile(__dirname + "/views/construccion.html")
// })



// app.get("/tshirts",(req, res) =>{
//     res.sendFile(__dirname + "/views/tshirts.html")
// })