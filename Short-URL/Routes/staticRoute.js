const express=require("express");
const router=express.Router();
const {handleHome,handleSignUp,handleAdminHome,handleLogin}=require("../Controllers/staticControlers");
const { restrictTo } = require("../Middlewares/auth");

router.get("/",restrictTo(['NORMAL','ADMIN']),handleHome)
router.get("/admin/urls",restrictTo(['ADMIN']),handleAdminHome)
router.get("/signUp",handleSignUp)
router.get("/login",handleLogin)




module.exports=router