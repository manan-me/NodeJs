const express = require("express");
const User=require("../Models/user")
const {handleGetAllUser,handleAddUser,handleGetAllApiUser,handleGetUserById,handleUpdateUserById,handleDeleteUserById}=require("../Controllers/users")

const router=express.Router()

//Routes
router.get("/users",handleGetAllUser);

//REST APIS

router.route("/api/users")
.get(handleGetAllApiUser)
.post(handleAddUser)

router
  .route("/api/users/:id")
  .get(handleGetUserById) 
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById)



module.exports=router