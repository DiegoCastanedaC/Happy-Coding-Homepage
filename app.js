
const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});


app.get("/construccion",(req, res) =>{
    res.sendFile(__dirname + "/views/construccion.html")
})


app.get("/",(req, res) =>{
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/tshirts",(req, res) =>{
    res.sendFile(__dirname + "/views/tshirts.html")
})



