const mainController={
    home: (req,res)=>{
        return res.render("home2")
    },

    tshirts: (req,res)=>{
        return res.render("tshirts")
    },

    socks: (req,res)=>{
        return res.render("socks")
    },

    
    bags: (req,res)=>{
        return res.render("bags")
    },

    hoodies: (req,res)=>{
        return res.render("hoodies")
    },

    hats: (req,res)=>{
        return res.render("hats")
    },

    search:(req,res)=>{
        let busquedaDeUsuario=req.query.query
        res.send(busquedaDeUsuario)
    },

    register:(req,res)=>{
        return res.render("register")
    },

    create:(req,res)=>{

    }

}

module.exports=mainController