const userController={
    register:(req,res)=>{
        return res.render("register")
    },
    create:(req,res)=>{

        let usuario={
            nombre:req.body.nombre,
            edad:req.body.edad,
            email:req.body.email
        }
        
        //guardarla y redireccionar
        res.redirect("users/list");
        
    }
}

module.exports=userController