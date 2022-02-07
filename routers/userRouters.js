const express = require("express")
const userController = require("../controllers/userController")
const router=express.Router()

router.get("/register", userController.register)
router.post("/register", userController.create)

module.exports=router