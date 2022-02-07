const express = require("express")
const router=express.Router()

const mainControlers =require("../controllers/mainController")
router.get("/", mainControlers.home)
router.get("/tshirts", mainControlers.tshirts)
router.get("/socks", mainControlers.socks)
router.get("/bags", mainControlers.bags)
router.get("/hoodies", mainControlers.hoodies)
router.get("/hats", mainControlers.hats)
router.get("/search",mainControlers.search)

module.exports=router